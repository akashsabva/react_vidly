// import React, { Component } from 'react';

// class NavBar extends Component {
//     render() { 
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <span className="navbar-brand" >
//                     Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounter}</span>
//                 </span>
//             </nav>
//         );
//     }
// }
 
// export default NavBar;
import React from 'react';
const NavBar = ({totalCounter}) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand" >
                Navbar <span className="badge badge-pill badge-secondary">{totalCounter}</span>
            </span>
        </nav>
    );
}
 
export default NavBar;