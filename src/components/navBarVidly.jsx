import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBarVidly = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Vidly</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/movies" className="nav-link">Movie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/customers" className="nav-link">Customers</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/rentals" className="nav-link">Rentals</NavLink>
                    </li>
                </ul> */}
                <div className="navbar-nav">
                    <NavLink to="/movies" className="nav-item nav-link">Movie</NavLink>
                    <NavLink to="/customers" className="nav-item nav-link">Customers</NavLink>
                    <NavLink to="/rentals" className="nav-item nav-link">Rentals</NavLink>
                    <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                    <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
                </div>
            </div>
        </nav>
    );
}
 
export default NavBarVidly;