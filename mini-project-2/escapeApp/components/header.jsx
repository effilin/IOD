import { AppBar, Grid, IconButton, Menu, Typography } from "@mui/material";
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
        <AppBar position="relative" sx={{borderRadius:'5px'}}>

            <Grid container spacing={3} rowSpacing={1}>
                
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}> 
                        <IconButton 
                        size="large" 
                        edge='start' 
                        color='inherit'
                        aria-label="menu" 
                        aria-controls="menu-appBar" 
                        aria-haspopup='true' 
                        sx={{mr:2 }}
                        onClick={handleMenuOpen}
                        
                        >
                            <MenuIcon sx={{color: `${currentUser.color}`}} />
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
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Typography variant='h3' component='div' sx={{ color:`${currentUser.color}`}}> EscapeApp</Typography>
                    </Grid>
                
            </Grid>
        </AppBar>
    )
}
