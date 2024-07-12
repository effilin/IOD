import { blue, green } from '@mui/material/colors'
import './robot.css'
import { animated, useSpring } from '@react-spring/web'


 export default function HeadNeck () {

   
    const [headBang, api] = useSpring (() => ({
        from: {backgroundColor: blue[600], transform: 'rotateZ(0deg)'},
        config: {
            mass: 5,
            friction: 12,
            tension: 180,
        },
        reverse: true,
    }))

    const handleClick = () => {
        api.start({
            from: {backgroundColor: blue[600], transform: 'rotateZ(0deg)'},
            to: {backgroundColor: green[600], transform: 'rotateZ(360deg)'}
        })
    }


    return(
    <animated.div className='head' style={{ ...headBang}} onClick={handleClick} >
        <h5 style={{marginTop:'5%', marginBottom:'0'}}>0   0</h5>
    </animated.div>
    )
 }

 