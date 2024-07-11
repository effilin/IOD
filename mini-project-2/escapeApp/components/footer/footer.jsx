import { MusicCarousel } from "./musicCarousel";
import { Grid, Box, Divider } from "@mui/material";
import { Robot } from "./Robot/robot";



export function Footer() {

    return (
        <Box sx={{display:'flex',  alignItems:'center', border: ' 1px solid', borderColor:'white' }}>
          <Grid container rowSpacing={4}>
            <Grid item sx={{ pr:'3vw', pl:'3vw'}} xs={3} sm={3} md={4} lg={4} xl={4} >
               <h3>thanks for playing </h3>
            </Grid>
            
            <Grid item sx={{pr:'3vw'}} xs={3} sm={3} md={3} lg={4} xl={4}> 
                <MusicCarousel />
            </Grid>  
            <Grid item sx={{pr:'3vw'}} xs={3} sm={3} md={4} lg={4} xl={4}> 
                <Robot />
            </Grid> 
          </Grid>
        </Box>

    )
}