import { Grid } from "@mui/material"
import './robot.css'
import { useSpring, animated } from "@react-spring/web"
import { blue, green, red } from "@mui/material/colors"


export function BodyArms() {

    const [doTorso, torsoApi] = useSpring (() => ({
        from: {transform: 'rotateY(0deg)', transformOrigin: '50', color: blue},
        config:{
            mass: 5,
            friction: 12,
            tension: 180,
        }
    }))

    const [rightArmSpring, rightArmApi] = useSpring(() => ({
        from: {transform: 'rotateZ(0deg)', transformOrigin: 'right', color: green[100]},
        config:{
            mass: 5,
            friction: 12,
            tension: 180,
        }
    }))

    const [leftArmSpring, leftArmApi] = useSpring(() => ({
        from: {transform: 'rotateZ(0deg)', transformOrigin: 'left', color: green[100]},
        config:{
            mass: 5,
            friction: 12,
            tension: 180,
        }
    }))

    const handleClick = () => {
        torsoApi.start({
            from: { transform: 'rotateY(0deg)', color: blue },
            to: { transform: 'rotateY(360deg)', color: green[600]}
        });

        rightArmApi.start({
            from: { transform: 'rotateZ(0deg) ', color: green[100] },
            to: { transform: 'rotateZ( 50deg) ', color: green[900]},
            reverse: true

        });

        leftArmApi.start({
            from: { transform: 'rotateZ(0deg) ', color: green[100] },
            to: { transform: 'rotateZ( -55deg) ', color: green[900]},
            reverse: true

        });
    }

 


    return (
        <animated.div className="torso" style={{... doTorso}} onClick={handleClick} >
            
            <animated.h4 className="armR" style={{...rightArmSpring}}>*-------</animated.h4>
            
            
            <div className="body" ></div>
            
            
            <animated.h4 className="armL" style={{...leftArmSpring}}>-------*</animated.h4>
            
                
        </animated.div> 
    )
};