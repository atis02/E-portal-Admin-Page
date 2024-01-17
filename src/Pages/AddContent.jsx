import React, { useState, useEffect } from 'react'
import { Container, Box, Stack, Typography, MenuItem, TextField, Button, CircularProgress, FormControl, InputLabel, Select, styled, CardActionArea, CardMedia, CardContent, } from '@mui/material';
import { navTitle } from '../Components/data.mjs';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddContent() {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState();
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);
    const [age, setAge] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [sourceLink, setSourceLink] = useState('');
    const [sourceTitle, setSourceTitle] = useState('');



    const Image = (event) => {
        setImage(event.target.files[0]);
    };


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const img_Url = import.meta.env.VITE_IMG_BASE_URL;

    useEffect(() => {
        const getCategory = async () => {
            const categoryResponse = await axios.get(`${baseUrl}/categories`).then((catResponse) => {
                setCategories(catResponse.data);
                console.log(catResponse.data);
            })
        }
        const getNews = async () => {
            const categoryResponse = await axios.get(`${baseUrl}/news`).then((newsResp) => {
                setNews(newsResp.data.news);
            })
        }
        getNews()
        getCategory()
    }, []);

    const deleteNews = async (id) => {
        await axios.delete(`${baseUrl}/news`, {
            data: { id }
        })
            .then((res) => {
                res.data === 'success' ? toast.success('successfully deleted') : toast.error('error')

            })


    }
    const postNews = async (e) => {
        setLoading(true);
        e.preventDefault();


        await axios.post(`${baseUrl}/news`, {
            title: title,
            description: description,
            image: image,
            sourceTitle: sourceTitle,
            sourceLink: sourceLink,
            categoryId: age._id,
            categoryName: age.name
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => {
            console.log(res);
            res.status === 200 ? window.location.reload() : toast.error('error')
            toast.success('successfully added')
        })
        setLoading(false);
    }
    return (
        <Container>
            <Toaster />

            <Typography sx={navTitle}>
                ADD CONTENT
            </Typography>

            <form onSubmit={postNews} style={{ width: '100%', gap: '20px', backgroundColor: '#292929 ', borderRadius: "20px", alignItems: 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder='Add news title'
                    name='title'
                    sx={{ width: '60%', pt: '20px' }}
                    onChange={(e) => setTitle(e.target.value)}
                    InputProps={{
                        sx: {
                            borderRadius: '35px',
                            backgroundColor: '#333',
                            border: '1px solid  #00997B',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#fff'
                        }
                    }}
                    variant="outlined"
                />
                <TextField
                    id="input-with-icon-textfield"
                    placeholder='Add Source Title'
                    onChange={(e) => setSourceTitle(e.target.value)}
                    name='SourceTitle'
                    sx={{ width: '60%' }}
                    InputProps={{
                        sx: {
                            borderRadius: '35px',
                            backgroundColor: '#333',
                            border: '1px solid  #00997B',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#fff'
                        }
                    }}
                    variant="outlined"
                />
                <TextField
                    id="input-with-icon-textfield"
                    name='SourceLink'
                    placeholder='Add Source Link'
                    sx={{ width: '60%' }}
                    onChange={(e) => setSourceLink(e.target.value)}
                    InputProps={{
                        sx: {
                            borderRadius: '35px',
                            backgroundColor: '#333',
                            border: '1px solid  #00997B',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#fff'
                        }
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                    multiline
                    name='description'
                    rows={4}
                    sx={{ width: '60%', }}
                    InputProps={{

                        sx: {
                            borderRadius: '35px',
                            backgroundColor: '#333',
                            border: '1px solid  #00997B',
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#fff'
                        }
                    }}
                />
                <Stack width='60%' direction='row' alignItems='center' justifyContent='space-between'>

                    <Box sx={{ minWidth: 200 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" sx={{ color: '#fff' }}>Categories:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                defaultValue={age}
                                onChange={handleChange}
                                sx={{ backgroundColor: '#333', color: '#fff', border: '1px solid  #00997B', }}

                            >
                                {categories.map((item) =>
                                    <MenuItem value={item} key={item._id}>{item.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Box>
                    <input type="file" name='image' onChange={Image} />
                </Stack>

                <Button
                    onClick={postNews}
                    sx={{ backgroundColor: 'blue', color: '#fff', width: '100px', height: '50px', mb: '20px' }}
                >
                    {loading ? (<CircularProgress disableShrink />) : 'Send'}
                </Button>
            </form>

            <Typography sx={navTitle} mt={5}>
                DELETE CONTENT
            </Typography>
            <Stack direction='row' flexWrap='wrap' sx={{ gap: '10px' }} >

                {
                    news.length > 0 ? news.map((item) => (
                        <CardActionArea key={item._id} sx={{ width: '330px', minHeight: '350px', pt: '20px', color: '#fff', backgroundColor: '#292929', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                            <CardMedia

                                sx={{ height: '238px', width: '300px' }}
                                image={`${img_Url}/${item.image}`}
                                title="green iguana"
                                style={{ borderRadius: '10px' }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                            </CardContent>

                            <Stack direction='row' alignItems='center' justifyContent='space-between' width='90%' p='10px'>
                                <Stack direction='row'>
                                    <img alt='' src='/images/heart-fill.svg' /><Typography color='#fff'>{item.like}</Typography>
                                </Stack>

                                <Button sx={{ color: '#fff', backgroundColor: 'red' }} onClick={() => deleteNews(item._id)}>Delete Content</Button>
                            </Stack>
                        </CardActionArea>
                    )) : (<Typography textAlign='center' width='100%' mt='50px'>No News in this category</Typography>)
                }
            </Stack>

        </Container >
    )
}
