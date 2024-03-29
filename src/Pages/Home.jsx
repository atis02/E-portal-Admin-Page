import React, { useEffect, useState } from 'react'
import { Container, Box, Stack, Typography, Button, CircularProgress, CardActionArea, Card, CardActions, CardMedia, CardContent } from '@mui/material';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
export default function Home() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState([]);
    const [more, setMore] = useState(false);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const img_Url = import.meta.env.VITE_IMG_BASE_URL;

    useEffect(() => {
        const getNews = async () => {
            setLoading(true);
            const response = await axios.get(baseUrl + '/news').then((response) => {
                setData(response.data.news);
                setFilter(response.data.news);
                setLoading(false);
                console.log(response.data.news);
            })
                .catch(error => {
                    return setError(error.message);
                })
        };
        const getCategory = async () => {
            setLoading(true);
            const categoryResponse = await axios.get(baseUrl + '/categories').then((catResponse) => {
                setCategory(catResponse.data);
                setLoading(false);
                console.log(catResponse.data);
            })
        }
        getCategory();
        getNews();
    }, []);

    const filterNews = (cat) => {
        const updatedList = data.filter((x) => x.category_name === cat);
        setFilter(updatedList)
    }


    return (<>
        {error ? (<Typography textAlign='center' variant='h3' mt={10}>{error}</Typography>) :
            loading ? (<Stack direction='column' height='100%' mt={10} alignItems='center' sx={{ gap: '10px' }} > <CircularProgress />Loading...</Stack >)
                : (
                    <Box    >
                        <Stack direction='row' alignItems='center' m='10px 0 10px 0' spacing={2}>
                            <Button
                                onClick={() => setFilter(data)}
                                sx={{
                                    borderRadius: '100px',
                                    border: '1px solid #24B47E',
                                    backgroundColor: 'rgba(3, 101, 82, 0.16)',
                                    color: '#fff'
                                }}
                            >
                                All
                            </Button>
                            {category.map((category) => (
                                <Button
                                    key={category._id}
                                    onClick={() => filterNews(category.name)}
                                    sx={{
                                        borderRadius: '100px',
                                        border: '1px solid #24B47E',
                                        backgroundColor: 'rgba(3, 101, 82, 0.16)',
                                        color: '#fff'
                                    }}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </Stack>
                        <Stack direction='row' flexWrap='wrap' sx={{ gap: '10px' }} >

                            {
                                filter.length > 0 ? filter.map((news) => (
                                    <CardActionArea key={news._id} sx={{ width: '330px', minHeight: '350px', pt: '20px', color: '#fff', backgroundColor: '#292929', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                                        <CardMedia

                                            sx={{ height: '238px', width: '300px' }}
                                            image={`${img_Url}/${news.image}`}
                                            title="green iguana"
                                            style={{ borderRadius: '10px' }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {news.title}
                                            </Typography>
                                        </CardContent>

                                        <Stack direction='row' justifyContent='space-between' width='90%' p='10px'>
                                            <Stack direction='row'>
                                                <img alt='' src='/images/heart-fill.svg' /><Typography color='#fff'>{news.like}</Typography>
                                            </Stack>
                                            <Stack>
                                                <img alt='' onClick={() => setMore(!more)} src='/images/more-2-fill.svg' />
                                                {more ?
                                                    <NavLink to={news.source_link} >more</NavLink>
                                                    : ''}
                                            </Stack>

                                        </Stack>
                                    </CardActionArea>

                                )) : (<Typography textAlign='center' width='100%' mt='50px'>No News in this category</Typography>)
                            }

                        </Stack>

                    </Box >)
        }
    </>

    )

}
