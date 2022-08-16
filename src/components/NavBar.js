import './NavBar.css';
import gdscLogo from "./gdsclogo.jpg"

const NavBar = () => {
    return (
        <nav className="nav-bar">
            
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">Members</a></li>
                <li><a href="#contact">Annoucements</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;