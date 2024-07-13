import { MusicCarousel } from "./musicCarousel";
import { Grid, Box } from "@mui/material";
import { Robot } from "./Robot/robot";
import { useUserContext } from "../../context/nameContext";
import { useContext } from "react";
import MyThemeProvider from "../../themes/themeContext";



export function Footer() {

  const { theme, synthTheme} = useContext( MyThemeProvider );
  const {currentUser, handleUpdateUser} = useUserContext();


    return (
        <Box sx={{display:'flex',  alignItems:'center', border: ' 1px solid', borderColor:'white', backgroundColor: theme.primary }}>
          <Grid container rowSpacing={4} justifyContent='space-evenly'> 
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