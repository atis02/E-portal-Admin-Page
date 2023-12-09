import React, { useEffect } from 'react'
import { Container, Box, Stack, Typography, } from '@mui/material';
import { useLocation, Routes, Route, useNavigate } from "react-router-dom"
import Navbar from './Navbar';
import Contact from '../Pages/Contact';
import Header from '../Pages/Header';
import AddContent from '../Pages/AddContent';
import AddCategory from '../Pages/AddCategory';



export default function MainNavPage() {

    const history = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <Box backgroundColor='#000' color='#fff'>
                <Stack width='20%' direction='row' minHeight='100vh'  >
                    <Navbar />
                    <Routes >
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/' element={<Header />} />
                        <Route path='/content' element={<AddContent />} />
                        <Route path='/category' element={<AddCategory />} />
                    </Routes>
                </Stack>
            </Box>
        </>
    )
}
