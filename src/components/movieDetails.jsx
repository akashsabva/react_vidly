import React from 'react';

const MovieDetails = ({ match, history }) => {

    return (  
        <React.Fragment>
            <p>
                MovieDetails of - {match.params.id}
            </p>
            <button className="btn btn-primary m-2" onClick={() => history.push("/movies")}>Save</button>
        </React.Fragment>
    );
}
 
export default MovieDetails;

// import React, { Component } from 'react';

// class MovieDetails extends Component {

//     onSave = () => {
//         this.props.history.push("/movies");
//     }
//     render() { 
//         return (  
//             <React.Fragment>
//                 <p>MovieDetails of - {this.props.match.params.id}</p>
//                 <button className="btn btn-primary" onClick={this.onSave}>Save</button>
//             </React.Fragment>
//         );
//     }
// }
 
// export default MovieDetails;