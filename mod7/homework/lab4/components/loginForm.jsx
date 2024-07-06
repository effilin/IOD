import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useState, } from "react";


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
            <TextField required focused id='outlined-required' value={name} color='success' label='Name' onChange={(e) => setName(e.target.value)} />
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

            <Button variant="outlined" onClick={handleNameSubmit}>Submit</Button>
        
        </form>
    )
}