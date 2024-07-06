import { useState } from "react";
import { useUserContext } from "../context/nameContext";
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'

function LoginForm() {
    const [userName, setUserName] = useState('');
    const [favColor, setFavColor] = useState('');
    const {currentUser, handleUpdateUser} = useUserContext();

    const handleSubmit = () => {
        handleUpdateUser({name: userName, color: favColor});
        console.log(`${favColor}, ${userName}`)
        alert(` welcome ${userName}`);
    }

    return (
        <Box component='section'>
            <Paper elevation={3} square={false}>
                <form>
                    <TextField value={userName} label="Name" variant="filled" color="success" focused  onChange={(e) => setUserName(e.target.value)}/>
                    <FormControl>
                        <InputLabel id='color-choice'>Favorite Color</InputLabel>
                        <Select labelId="color-choice" id="color-select" value={favColor} label="Color" onChange={(e) => setFavColor(e.target.value)}>
                            <MenuItem value={'lightcoral'}>Coral</MenuItem>
                            <MenuItem value={'orangered'}>Red</MenuItem>
                            <MenuItem value={'mediumorchid'}>Purple</MenuItem>
                            <MenuItem value={'royalblue'}>Blue</MenuItem>
                            <MenuItem value={'darkseagreen'}>SeaGreen</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="outlined" onClick={handleSubmit}>Submit</Button>

                </form>
            </Paper>
        </Box>
    )
}
export default LoginForm;