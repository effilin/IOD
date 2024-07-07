import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState, } from "react";
import Grid from '@mui/material/Grid'


export default function LoginForm() {

    const[name, setName] = useState(null);
    const [favColor, setColor] = useState('');
   

    const handleRadioChange =(event) => {
        setColor(event.target.value);
    }
    const handleNameSubmit = (event) => {
        event.preventDefault();
        console.log({name})
        alert( `Welcome ${name}`)
    };

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                    <TextField required focused id='outlined-required' value={name} color='success' label='Name' onChange={(e) => setName(e.target.value)} />
                </Grid>
                <Grid item xl={7} lg={7} md={7} sm={12} xs={12}>
                    <FormControl>
                        <FormLabel id='form-control-label' >Favorite Color</FormLabel>
                            <RadioGroup row area-labelledby='form-control-label' name='favoriteColor' defaultValue='pink' onChange={handleRadioChange} sx={{ backgroundColor: favColor}}>
                                <FormControlLabel value='salmon' control={<Radio />} label='Salmon' labelPlacement="bottom" />
                                <FormControlLabel value='teal' control={<Radio />} label='Teal' labelPlacement="bottom" />
                                <FormControlLabel value='orange' control={<Radio />} label='Orange' labelPlacement="bottom" />
                                <FormControlLabel value='green' control={<Radio />} label='Green' labelPlacement="bottom" />
                                <FormControlLabel value='yellow' control={<Radio />} label='Yellow' labelPlacement="bottom" />
                                <FormControlLabel value='red' control={<Radio />} label='Red' labelPlacement="bottom" />
                            </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button variant="outlined" onClick={handleNameSubmit}>Submit</Button>
                </Grid>
            </Grid>
        
        </form>
    )
}