// import React, { Component } from 'react';

// class Like extends Component {
//     render() { 
//         let classes = "fa fa-heart";
//         if(!this.props.liked)
//             classes += "-o";
//         return (<i className={classes} onClick={this.props.onClick} style={{cursor: 'pointer'}} aria-hidden="true"></i>);
//     }
// }
 
// export default Like;

import React from 'react';

const Like = (props) => {
    let classes = "fa fa-heart";
    if(!props.liked)
        classes += "-o";
    return (<i className={classes} onClick={props.onClick} style={{cursor: 'pointer'}} aria-hidden="true"></i>);
}
 
export default Like;