import { borderColor, borderRadius, height } from "@mui/system"
import { useUserContext } from "../../context/nameContext";


export function Flowerbed() {

    const {currentUser, handleUpdateUser} = useUserContext();

    const gardenStyle = {
        backgroundImage:'url("../src/images/dirt.jpg")',
        backgroundSize: 'cover',
        height: '30vw',
        width: '80vw',
        marginTop: '.5vw',
        borderColor: `${currentUser.color}`,
        borderStyle: 'inset',
        borderRadius: '5px'
    }

    return(
        <div style={gardenStyle}>
        
        </div>
    )
}