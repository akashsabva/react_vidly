import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import { getGenres } from '../services/fakeGenreService.js';
import Like from './common/like.jsx';
import Pagination from './pagination.jsx';
import { paginate } from '../utils/paginate.js';
import ListGroup from './listGroup.jsx';
import MoviesTable from './moviesTable.jsx';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox.jsx';

class MovieClass extends Component {
    state = { 
        movieList : getMovies(),
        genreList: [],
        tableHeading : ['Title','Genre','Stock','Rate','Like',''],
        tableHeading2 : ['title','publishDate','numberInStock','dailyRentalRate','like', ''],
        pageSize: 4,
        currentPage: 1,
        sortedColumn: {path: 'title', order: 'asc'},
        searchQuery: "",
        selectedGenre: null

    } 

    componentDidMount() {
        const genreList = [{_id: "", name: "All Genres" }, ...getGenres()];
        this.setState({movieList: getMovies(), genreList });
    }

    handleLiked = movie => {
        const movieList = [...this.state.movieList];
        const index = movieList.indexOf(movie);
        movieList[index] = {...movie};
        movieList[index].liked = !movieList[index].liked;
        this.setState({movieList});
    }    

    thRendering = () => {
        return this.state.tableHeading.map((heading,index) => {
            return <th key={index} scope="col">{heading}</th>
        });
    }

    tdRendering = () => {
        return this.state.movieList.map((row,index) => {
            return (
                <tr key={row._id}>
                    {
                        this.state.tableHeading2.map((rowTd,index) => {
                            if(rowTd === '') {
                                return <td key={index}><button className='btn btn-danger' onClick={() => this.deleteMovie(row._id)}>Delete</button></td>
                            } else if(rowTd === 'like') {
                                return <td key={index}><Like liked={row.liked} onClick={() => this.handleLiked(row)} /></td>
                            } else {
                                return <td key={index}>{row[rowTd]}</td>
                            }
                        })
                    }
                </tr>
            )
        });
    }

    deleteMovie = (checkMovie) => {
        this.setState({movieList : this.state.movieList.filter((singleMovie) => {
            return singleMovie._id !== checkMovie;
        })})
    }

    mainCode() {
        if(this.state.movieList.length === 0) {
            return <p>No Record Found</p>
        } else {
            return <table className="table">
                <thead className="thead-light">
                    <tr>
                        { this.thRendering() }
                    </tr>
                </thead>
                <tbody>
                    { this.tdRendering() }
                    
                </tbody>
            </table>
        }
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleListGroupSelect = genre => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    }

    handleSearch = query => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
    }

    handleSort = sortedColumn => {
        this.setState({sortedColumn});
    }

    getPagedData = () => {
        const {pageSize, currentPage, movieList: allMovie, selectedGenre, sortedColumn, searchQuery} = this.state;

        let filtered = allMovie;
        if(searchQuery) 
            filtered = allMovie.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre._id) 
            filtered = allMovie.filter(m => m.genre._id === selectedGenre._id);
        
        const sorted = _.orderBy(filtered, sortedColumn.path, sortedColumn.order);
        const movies = paginate(sorted, currentPage, pageSize);
        return {totalCount: filtered.length, movies: movies};
    }

    render() { 
        const count = this.state.movieList.length;
        const {pageSize, currentPage, genreList, selectedGenre, sortedColumn, searchQuery} = this.state;

        const { totalCount, movies } = this.getPagedData();
        
        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup items={genreList} selectedItem={selectedGenre} onListGroupSelect={this.handleListGroupSelect} />
                </div>
                <div className="col">
                    {/* <button className="btn btn-primary mb-2" onClick={() => this.props.history.push("/movies/new")}>New Movie</button> */}
                    <Link to="/movies/new" className="btn btn-primary mb-2">New Movie</Link>
                    {count > 0 ? <p>Showing {totalCount} movies in the database.</p> : <p>No Record Found !</p>}
                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                    <MoviesTable movies={movies} onDelete={this.deleteMovie} onLike={this.handleLiked} onSort={this.handleSort} sortedColumn={sortedColumn} /> 
                    <Pagination itemsCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
                    {/* {this.mainCode()} */}
                </div>
            </div>
        );
    }

}
 
export default MovieClass;