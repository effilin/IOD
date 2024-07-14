import { MusicCarousel } from "./musicCarousel";
import { Grid, Box } from "@mui/material";
import { Robot } from "./Robot/robot";
import { useUserContext } from "../../context/nameContext";
import { useTheme } from '@mui/material/styles'
import './footer.css'
import ChatBox from "./Robot/robotChat";



export function Footer() {

  const theme = useTheme();
  const {currentUser, handleUpdateUser} = useUserContext();


    return (

        <Box className='rootBox' sx={{ backgroundColor: theme.palette.primary.main}}>
          <Grid container rowSpacing={4} justifyContent='space-evenly'> 
            <Grid item sx={{pr:'3vw'}} xs={3} sm={3} md={3} lg={4} xl={4}> 
                <MusicCarousel />
            </Grid>  
            <Grid item xs={3} sm={3} md={4} lg={4} xl={4}> 
                <Robot />
            </Grid> 
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}> 
              <ChatBox />
            </Grid>
          </Grid>
        </Box>

    )
}