import { blue, green } from '@mui/material/colors'
import './robot.css'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'


 export default function HeadNeck () {

    const [toggle, setToggle] = useState(false)

   
    const [headBang, api] = useSpring (() => ({
        from: {backgroundColor: blue[600], transform: 'rotateZ(0deg)', borderRadius:'0%',},
        config: {
            mass: 5,
            friction: 12,
            tension: 180,
        },
        reverse: true,
    }))

    const handleClick = () => {
        setToggle(!toggle)
        api.start({
            from: {backgroundColor: blue[600], transform: 'rotateZ(0deg)', borderRadius:'0'},
            to: toggle 
            ? { backgroundColor: green[600], transform: 'rotateZ(360deg)', borderRadius:'40%'} 
            : { backgroundColor: blue[600], transform: 'rotateZ(360deg)', borderRadius:'0' }
        })
    }


    return(
    <animated.div className='head' style={{ ...headBang}} onClick={handleClick} >
        <h5 style={{marginTop:'5%', marginBottom:'0'}}>0   0</h5>
    </animated.div>
    )
 }

 