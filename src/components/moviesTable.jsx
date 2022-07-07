// import React from 'react';
// import Like from './common/like.jsx';

// const MoviesTable = props => {

//     const { movies, onDelete, onLike, onSort } = props;

//     return ( 
//         <table className="table">
//             <thead className="thead-light">
//                 <tr>
//                     <th onClick={() => onSort('title')}>Title</th>
//                     <th onClick={() => onSort('genre.name')}>Genre</th>
//                     <th onClick={() => onSort('numberInStock')}>Stock</th>
//                     <th onClick={() => onSort('dailyRentalRate')}>Rate</th>
//                     <th>Like</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {movies.map(movie => (
//                     <tr key={movie._id}>
//                         <td>{movie.title}</td>
//                         <td>{movie.genre.name}</td>
//                         <td>{movie.numberInStock}</td>
//                         <td>{movie.dailyRentalRate}</td>
//                         <td><Like liked={movie.liked} onClick={() => onLike(movie)} /></td>
//                         <td><button className='btn btn-danger' onClick={() => onDelete(movie._id)}>Delete</button></td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//      );
// }
 
// export default MoviesTable;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like.jsx';
import Table from './common/table.jsx';

class MoviesTable extends Component {
    columns = [
        {
            path: 'title', 
            label: 'Title', 
            content: movie => (<Link to={`/movies/${movie._id}`}>{movie.title}</Link>)
        },
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {
            key: 'Like', 
            content: movie => (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />)
        },
        {
            key: 'Delete', 
            content: movie => (<button className='btn btn-danger' onClick={() => this.props.onDelete(movie._id)}>Delete</button>)
        }
    ];

    render() { 
        const { movies, onSort, sortedColumn } = this.props;

        return ( 
            <Table columns={this.columns} onSort={onSort} sortedColumn={sortedColumn} data={movies} />
        );
    }
}
 
export default MoviesTable;