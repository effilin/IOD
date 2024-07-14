import { useSpring } from "@react-spring/web";
import { animated } from "@react-spring/web";
import { useUserContext } from "../../../context/nameContext";



export default function ChatBox() {

const {currentUser, handleUpdateUser} = useUserContext();

const animatedText = useSpring ({
    from: {scale: 0, opacity: 0},
    to: {scale: 2, opacity: 1},
    config: {
        friction: 60,
        tension: 280,
    },
    delay: 3,
    reset:true
})


return (
<animated.h4 style={animatedText}>{currentUser.robotText}</animated.h4> 
)
}