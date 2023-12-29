import React, { useState, useEffect } from 'react'
import { Container, Box, Stack, Typography, MenuItem, TextField, Button, CircularProgress, FormControl, InputLabel, Select, } from '@mui/material';
import { navTitle } from '../Components/data.mjs';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function AddCategory() {
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])


    const baseUrl = 'https://repo.gozle.com.tm/eportalback/api/v1';
    // https://repo.gozle.com.tm/eportalback/api/v1/news?category=Programming



    const postCategory = async (event) => {

        setLoading(true);
        event.preventDefault();
        await axios.post(`${baseUrl}/categories`, { name: category }, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.data.name === category ? window.location.reload() : 'error in adding')
            .catch(error => {
                return console.log(error);
            })
        setLoading(false);
        toast.success('successfully added')


    };
    useEffect(() => {
        const getCategory = async () => {
            const categoryResponse = await axios.get(`${baseUrl}/categories`).then((catResponse) => {
                setCategories(catResponse.data);
                console.log(catResponse.data);
            })
        }
        getCategory();
    }, []);
    const deleteCategory = async (id) => {
        axios.delete(`${baseUrl}/categories`, {
            data: { id }
        }).then((res) => {
            res.data === 'success' ? window.location.reload() : 'error'
        })
        toast.success('successfully deleted')
    }



    return (
        <Container>
            <Toaster />
            <Typography sx={navTitle}>
                Add Category
            </Typography>
            <form onSubmit={postCategory} style={{ width: '100%', height: '80px', gap: '20px', backgroundColor: '#292929 ', borderRadius: "20px", alignItems: 'center', display: 'flex' }}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder='Add Category name'
                    sx={{ width: '60%', pl: '30px' }}
                    onChange={(e) => setCategory(e.target.value)}
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
                <Button
                    onClick={postCategory}
                    sx={{ backgroundColor: 'blue', color: '#fff', width: '100px', height: '50px' }}
                >
                    {loading ? (<CircularProgress disableShrink />) : 'Send'}
                </Button>
            </form>
            <Typography fontSize='25px' mt='20px'>
                Delete Category:
            </Typography>
            <Stack spacing={2} mt='10px'>
                {categories.map((elem) => (
                    <Stack p='7px' borderRadius="10px" width='60%' key={elem._id} direction='row' alignItems='center' backgroundColor='#292929 ' justifyContent='space-between'>
                        <Typography>{elem.name}</Typography>
                        <Button onClick={() => {
                            deleteCategory(elem._id)
                        }} sx={{ color: '#fff', backgroundColor: 'red' }}>Delete</Button>
                    </Stack>
                ))}
            </Stack>
        </Container>
    )
}
