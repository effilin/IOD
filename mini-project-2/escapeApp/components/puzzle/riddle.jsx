import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSpring, animated } from '@react-spring/web';




export default function StarWarsRiddle () {

  const theme = useTheme();

  const colorChange = useSpring({
      from: { color: theme.palette.secondary.contrastText, transform: 'scale(0)' },
      to: { color: theme.palette.secondary.main, transform: 'scale(1)' },
      delay: 10,
      reverse: true,
      config: {
        tension: 180,
        friction: 12 
      }
    })
   


    return(
        <div> 
           <animated.Typography variant="h4" className="riddle" sx={colorChange}>What did Obi Wan say to Luke when he was having trouble eating Sushi? </animated.Typography>
        </div>
    )
}