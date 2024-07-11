import { MusicCarousel } from "./musicCarousel";
import { Grid, Box, Divider } from "@mui/material";
import { Robot } from "./robot";



export function Footer() {

    return (
        <Box sx={{display:'flex',  alignItems:'center', border: ' 1px solid', borderColor:'white' }}>
          <Grid container rowSpacing={1}>
            <Grid item sx={{ pr:'3vw', pl:'3vw'}} xs={3} sm={3} md={3} lg={3} xl={3} >
               <h3>thanks for playing </h3>
            </Grid>
            
            <Grid item sx={{pr:'3vw'}} xs={3} sm={3} md={3} lg={3} xl={3}> 
                <MusicCarousel />
            </Grid>  
            <Grid item sx={{pr:'3vw'}} xs={3} sm={3} md={3} lg={3} xl={3}> 
                <Robot />
            </Grid> 
          </Grid>
        </Box>

    )
}