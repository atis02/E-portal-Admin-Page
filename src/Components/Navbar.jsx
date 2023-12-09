import { Stack } from '@mui/material';
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem, menuClasses } from 'react-pro-sidebar';


function Navbar() {


    return (
        <Sidebar backgroundColor='#212121' style={{ border: '1px solid #212121' }} >
            <Menu style={{ display: 'flex', height: '100%', alignItems: 'center', flexDirection: 'column' }}  >
                <Stack direction='column' spacing='30px' pt='200px'>
                    <NavLink to='/' className='nav-link'>
                        <Stack direction='row' alignItems='center' spacing={2} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" >
                                <path d="M29.3703 28.6596C29.3703 29.4476 28.7315 30.0864 27.9435 30.0864H7.96744C7.17942 30.0864 6.54058 29.4476 6.54058 28.6596V15.8179H2.26001L16.9956 2.42184C17.5398 1.92709 18.3711 1.92709 18.9153 2.42184L33.6509 15.8179H29.3703V28.6596ZM16.5286 18.6716V27.2327H19.3823V18.6716H16.5286Z" />
                            </svg>
                            <Stack>Home</Stack>
                        </Stack>
                    </NavLink>
                    <NavLink to='/content' className='nav-link' >
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" >
                                <path d="M17.9554 1.52734L31.5106 9.37506V25.0705L17.9554 32.9182L4.40027 25.0705V9.37506L17.9554 1.52734ZM10.1062 14.3275L16.5286 18.0458V25.2491H19.3823V18.0458L25.8046 14.3275L24.3749 11.8579L17.9554 15.5743L11.536 11.8579L10.1062 14.3275Z" />
                            </svg>
                            <Stack>Add Content</Stack>
                        </Stack>
                    </NavLink>
                    <NavLink to='/category' className='nav-link' >
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" >
                                <path d="M3.68683 31.9806C3.68683 25.6763 8.79743 20.5658 15.1017 20.5658C21.406 20.5658 26.5166 25.6763 26.5166 31.9806H3.68683ZM15.1017 19.1389C10.3717 19.1389 6.54054 15.3078 6.54054 10.5777C6.54054 5.84772 10.3717 2.0166 15.1017 2.0166C19.8317 2.0166 23.6628 5.84772 23.6628 10.5777C23.6628 15.3078 19.8317 19.1389 15.1017 19.1389ZM25.6074 22.3254C30.0098 23.4504 33.3197 27.3055 33.6274 31.9806H29.3703C29.3703 28.2568 27.9437 24.8662 25.6074 22.3254ZM22.7213 19.0774C25.0509 16.9875 26.5166 13.9538 26.5166 10.5777C26.5166 8.55541 25.9906 6.6559 25.0682 5.00854C28.3362 5.66075 30.7971 8.54398 30.7971 12.0046C30.7971 15.9463 27.6045 19.1389 23.6628 19.1389C23.3437 19.1389 23.0293 19.1179 22.7213 19.0774Z" />
                            </svg>
                            <Stack>Add Category</Stack>
                        </Stack>
                    </NavLink>
                    <NavLink to='/contact' className='nav-link' >
                        <Stack direction='row' alignItems='center' spacing={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" >
                                <path d="M17.9568 31.47C10.0765 31.47 3.68823 25.0817 3.68823 17.2014C3.68823 9.32112 10.0765 2.93286 17.9568 2.93286C25.8371 2.93286 32.2254 9.32112 32.2254 17.2014C32.2254 25.0817 25.8371 31.47 17.9568 31.47ZM13.5195 18.872L13.5375 18.8606C14.3647 21.5915 14.7783 22.957 14.7783 22.957C14.9385 23.4 15.1588 23.479 15.426 23.4429C15.6931 23.4067 15.835 23.2622 16.0093 23.0939C16.0093 23.0939 16.5748 22.5482 17.7057 21.4568L21.3455 24.15C22.0087 24.5164 22.4875 24.3273 22.6522 23.5334L25.0176 12.3735C25.2788 11.3348 24.8207 10.9182 24.0153 11.2479L10.1276 16.6123C9.18018 16.9931 9.18476 17.5232 9.95514 17.7595L13.5195 18.872Z" />
                            </svg>
                            <Stack>Contact</Stack>
                        </Stack>
                    </NavLink>
                </Stack>
            </Menu >
        </Sidebar >
    )
}
export default Navbar; 