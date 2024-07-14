import { useUserContext } from "../../context/nameContext";

export default  function Welcome() {

    const { currentUser, handleUpdatedUser} = useUserContext();
    console.log(currentUser.name);

    if ( currentUser.name === null ) {
        
        return (
            <h1>Welcome,  Please LogIn </h1>
        )
    }
    else  {
        
        return(
            <h1>Welcome,{currentUser.name} </h1>

    )}}
