import React from "react"; 
import { useState } from "react";
import { useUserContext } from "../context/nameContext";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select,  TextField } from '@mui/material'

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [favColor, setFavColor] = useState('');
    
  
    const {currentUser, handleUpdateUser} = useUserContext();

    const handleSubmit = () => {
        handleUpdateUser({name: userName, color: favColor, robotText:`Hey ${userName}`});
        console.log(`${favColor}, ${userName}`);
    };


    return (
        
        <Box component='section' sx={{mt: '2vw'}}>
            <Paper elevation={3} square={false}>
                <form>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                       <TextField value={userName} label="Name" variant="filled" color="success" focused  onChange={(e) => setUserName(e.target.value)}/>
                    </Grid> 
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                        <FormControl>
                            
                            <InputLabel variant='filled' id='color-choice'>Favorite Color</InputLabel>
                                <Select labelId="color-choice" id="color-select" sx={{width: '15vw'}} value={favColor} label="Color" onChange={(e) => setFavColor(e.target.value)}>
                                   <MenuItem  value={'lightcoral'}>Coral</MenuItem>
                                   <MenuItem value={'orangered'}>Red</MenuItem>
                                   <MenuItem value={'mediumorchid'}>Purple</MenuItem>
                                   <MenuItem value={'royalblue'}>Blue</MenuItem>
                                   <MenuItem value={'darkseagreen'}>SeaGreen</MenuItem>
                                </Select>
                                
                        </FormControl>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12} >
                       
                    </Grid>
                    <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
            
        </Box>
        
    )
}
export default LoginForm;