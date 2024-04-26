import { Component } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Reactive TSP</h1>

                <ul className="nav-menu"> </ul>
                <li>
                    <a href="/">
                    <i className="fa-solid fa-house"></i>Home
                    </a>
                </li>
            </nav>
        )
    }
}

export default Navbar;

