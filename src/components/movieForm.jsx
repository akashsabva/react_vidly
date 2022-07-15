import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { getMovie, saveMovie } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService';

class MovieForm extends Form {
    
    state = {  
        data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
        errors: {},
        genres: []
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate")
    };

    componentDidMount() {
        const genres = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if(movieId === "new" || typeof movieId == 'undefined')
            return;

        const movie = getMovie(movieId);
        if(!movie)
            return this.props.history.replace("/notFound");
        
        this.setState({ data: this.mapToViewModel(movie) });
    }

    mapToViewModel(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        };
    }

    doSubmit = () => {
        console.log("Movie Form Submitted");
        // const { data } = this.state;
        // const newMovie = {};
        // newMovie.title = data.title;
        // newMovie.genre = {};
        // newMovie.genre.name = data.genre;
        // newMovie.numberInStock = data.numberInStock;
        // newMovie.dailyRentalRate = data.dailyRentalRate;

        saveMovie(this.state.data);
        this.props.history.push("/movies");
    };

    render() { 
        return (
            <React.Fragment>
                <h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    { this.renderInput('title', 'Title') }
                    { this.renderSelect('genreId', 'Genre', this.state.genres) }
                    { this.renderInput('numberInStock', 'Number in Stock', 'number') }
                    { this.renderInput('dailyRentalRate', 'Rate') }
                    { this.renderButton('Save') }
                </form>
            </React.Fragment>
        );
    }
}
 
export default MovieForm;