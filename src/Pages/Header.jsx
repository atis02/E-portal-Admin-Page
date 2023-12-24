import React from 'react'
import { Container, Box, Stack, Typography, TextField, InputAdornment } from '@mui/material';
import { navTitle } from '../Components/data.mjs';
import Home from './Home';

export default function Header() {
    return (
        <Box>
            <Stack width='75vw' m='10px 20px  0px 20px'  >
                <Typography sx={navTitle}>
                    Home
                </Typography>
                <Stack width='100%' height='80px' spacing={2} backgroundColor='#292929 ' borderRadius="20px" alignItems='center' direction='row' >
                    <Stack pl='20px'><img src="/images/Frame.svg" alt="" /></Stack>
                    <TextField
                        id="input-with-icon-textfield"
                        placeholder='Search'
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
                </Stack>
                <Home />
            </Stack>
        </Box>
    )
}
