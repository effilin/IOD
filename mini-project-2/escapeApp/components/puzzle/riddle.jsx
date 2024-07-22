
import { useTheme } from "@mui/material/styles";
import { useSpring, animated } from '@react-spring/web';




export default function StarWarsRiddle () {

  const theme = useTheme();

  const colorChange = useSpring({
      from: { color: theme.palette.secondary.contrastText, transform: 'scale(0)' },
      to: { color: theme.palette.secondary.main, transform: 'scale(1)' },
      reverse: true,
      config: {
        tension: 180,
        friction: 12 
      }
    })
   


    return(
        <div> 
           <animated.h2 className="riddle" sx={{colorChange}}>What did yoda say to Luke when he was eating with his hands? </animated.h2>
        </div>
    )
}