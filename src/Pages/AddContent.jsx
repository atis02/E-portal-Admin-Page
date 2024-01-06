import React, { useState, useEffect } from 'react'
import { Container, Box, Stack, Typography, MenuItem, TextField, Button, CircularProgress, FormControl, InputLabel, Select, styled, } from '@mui/material';
import { navTitle } from '../Components/data.mjs';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddContent() {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState();
    const [categories, setCategories] = useState([]);
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

    const baseUrl = 'https://repo.gozle.com.tm/eportalback/api/v1';

    useEffect(() => {
        const getCategory = async () => {
            const categoryResponse = await axios.get(`${baseUrl}/categories`).then((catResponse) => {
                setCategories(catResponse.data);
                console.log(catResponse.data);
            })
        }
        getCategory()
    }, []);


    const postNews = async (e) => {
        setLoading(true);
        e.preventDefault();


        await axios.post(`${baseUrl}/news`, {
            title: title,
            description: description,
            image: image,
            source_title: sourceTitle,
            source_link: sourceLink,
            category_id: age._id,
            category_name: age.name
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((res) => console.log(res.data))
            .catch(error => {
                return console.log(error);
            })
        setLoading(false);
    }
    return (
        <Container>
            <Toaster />

            <Typography sx={navTitle}>
                AddContent
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
        </Container>
    )
}
