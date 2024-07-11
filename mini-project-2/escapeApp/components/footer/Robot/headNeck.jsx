 import './robot.css'
 import { animated } from '@react-spring/web'


 const HeadNeck = () => {

   
    const headBang = useSpring ({
        from: {x: 0},
        to:{x: 1},
    })


    return(
    <animated.div className='head' style={{ transform: useThemeProps.x
        .to([0,1], [0,60])
        .to(value => `rotateZ(${value}deg)`)
    }} >
        <h5 style={{marginTop:'5%', marginBottom:'0'}}>0   0</h5>
    </animated.div>
    )
 }