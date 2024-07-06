import { useUserContext } from "../context/nameContext";

const { currentUser, handleUpdatedUser} = useUserContext;

export default Welcome = () => {
    if ( currentUser.name ) {
        return (
            <div> 
                <h1>Welcome {currentUser.name} </h1>
            </div>
        )
    }
    else {
        <div> 
            <h1>Welcome, Please LogIn</h1>
        </div>

    }
}