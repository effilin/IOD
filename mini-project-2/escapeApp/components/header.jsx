import { AppBar, Container, IconButton, Menu, Typography } from "@mui/material";
import { useUserContext } from "../context/nameContext";
import MenuIcon from '@mui/icons-material/Menu';
import NavBar from "./navBar";
import React from "react";


export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const {currentUser, handleUpdateUser} = useUserContext();

    

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth='xl' sx={{backgroundColor: `${currentUser.color}`}}>
                <IconButton 
                size="large" 
                edge='start' 
                color="inherit" 
                aria-label="menu" 
                aria-controls="menu-appBar" 
                aria-haspopup='true' 
                sx={{mr:0}}
                onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Menu 
                id="menu-appBar" 
                anchorEl={anchorEl} 
                anchorOrigin={{ vertical: 'top', horizontal:'right'}} 
                keepMounted 
                transformOrigin={{vertical: 'top', horizontal:'right'}} 
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                    <NavBar />
                </Menu>

                <Typography variant='h3' component='div'> EscapeApp</Typography>
            </Container>
        </AppBar>
    )
}
