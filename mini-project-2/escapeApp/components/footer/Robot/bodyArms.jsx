import { Grid } from "@mui/material"
import './robot.css'
import { useSpring, animated } from "@react-spring/web"
import { blue, green } from "@mui/material/colors"


export function BodyArms() {

    const [doRobot, api] = useSpring (() => ({
        from: {transform: 'rotateY(0deg)'},
        config: key => {
            if (key === 'y')
        }
    }))

    const handleClick = () => {
        api.start({
            from: { transform: 'rotateY(0deg)'},
            to: { transform: 'rotateY(360deg)'}
        })
    }

 


    return (
        <animated.div className="torso" style={{... doRobot}} onClick={handleClick}>
            
            <h4 className="armR">*-------</h4>
            
            
            <div className="body"></div>
            
            
            <h4 className="armL">-------*</h4>
            
                
        </animated.div> 
    )
};