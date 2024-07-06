import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { FormControlLabel, FormGroup, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material';
import NavBar from './navBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function MenuAppBar() {

    const [auth, setAuth] = React.useState(true) ;
    const[anchorE1, setAnchorE1] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked); 
    };

    const handleMenu =(event) => {
        setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorE1(null);
    };

    return(

        <Box sx={{ flexGrow:1}} >
            <FormGroup>
                <FormControlLabel control={ <Switch checked={auth} onChange={handleChange} aria-label='login switch' />}
                label={ auth ? 'logout' : 'login'} />
            </FormGroup>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='green' aria-label='menu' sx={{mr: 2}} >
                        <NavBar/>
                    </IconButton>
                    <Typography variant='h4' component='div' sx={{flexGrow:1}}> Homework </Typography>
                    {auth && (
                        <div>
                            <IconButton size='large' aria-label='account page' aria-controls='menu-appBar' aria-haspopup='true' onClick={handleMenu} color='inherit'>
                                <AccountCircleIcon />
                            </IconButton>
                            <Menu 
                            id='menu-appBar'
                            anchorEl={anchorE1}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                            keepMounted
                            transformOrigin={{vertical: 'top', horizontal: 'right'}}
                            open={Boolean(anchorE1)}
                            onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My Account</MenuItem>
                            </Menu>
                        </div>

                    )}
                </Toolbar>
            </AppBar>

        </Box>
    )

}