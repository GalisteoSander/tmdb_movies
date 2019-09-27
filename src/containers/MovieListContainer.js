import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchMovies from '../actions/movieActions';
import history from '../history';
import { MovieList } from '../components/MovieList';

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
    }

    fetchMore = (e) => {
        e.preventDefault();
        const { currentPage } = this.props;
        this.props.fetchMovies(currentPage);
    }

    goToTrailer = movieId => {
        history.push(`/MovieTrailer/${movieId}`);
    }

    componentDidMount() {
        const emptyMoviesArray = 0;
        const { currentPage, movieItems } = this.props;
        console.log(this.props);
        console.log(history);
        if (movieItems.length === emptyMoviesArray) {
            this.props.fetchMovies(currentPage);
        }
    }

    render() {
        const { goToTrailer, fetchMore, movieItems } = this.props;
        return (
            <MovieList movieItems={movieItems} onGoToTrailerCLick={this.goToTrailer} handleScroll={this.fetchMore}></MovieList>
        );
    }
}


const mapStateToProps = state => {
    return {
        movieItems: state.movies.movieItems,
        currentPage: state.movies.currentPage
    }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MovieListContainer));