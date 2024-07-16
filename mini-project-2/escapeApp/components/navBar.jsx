import { NavLink } from "react-router-dom";



export default function NavBar() {

    

    return(
        <nav className="NavBar" >
                <ul className='menu' style={{padding: '1%', width: 'fit-content'}}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                    <li><NavLink to="/puzzle"> Puzzle Page</NavLink></li>
                </ul>
              </nav>
    )
}