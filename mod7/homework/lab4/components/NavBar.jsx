import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <nav className="NavBar" style={{ backgroundColor: "pink", color: 'blue'}}>
                <ul className='menu'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dash">Dashboard</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/bitcoin">Bitcoin Rates</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>

                </ul>
              </nav>
    )
}