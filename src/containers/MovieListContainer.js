import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetchMovies from '../actions/movieActions';
import { MovieList } from '../components/MovieList';
import { constructUrlsForDiscover } from '../helpers';
import { NUMBER_OF_PAGES_TO_FETCH } from '../constants';

export class MovieListContainer extends Component {
    constructor(props) {
        super(props);
    }

    fetchMore = () => {
        const { currentPage } = this.props;
        let url = constructUrlsForDiscover(currentPage, NUMBER_OF_PAGES_TO_FETCH);
        this.props.fetchMovies(currentPage, url);
    }

    componentDidMount() {
        const emptyMoviesArray = 0;
        const { movieItems } = this.props;
        if (movieItems.length === emptyMoviesArray) {
            this.fetchMore();
        }

        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const { scrolling, movieItems } = this.props;
        if (!scrolling) {
            let numberOfMovieItems = movieItems.length - 1;
            let lastMovieItem = document.querySelector(`[name="${numberOfMovieItems}"]`);
            const lastMovieItemOffset = lastMovieItem.offsetTop + lastMovieItem.clientHeight;
            const pageOffset = window.pageYOffset + window.innerHeight;
            var bottomOffset = 30;
            if (pageOffset > lastMovieItemOffset - bottomOffset) this.fetchMore();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        const { movieItems, pending, error } = this.props;
        return (
            <div>
                <MovieList error={error} pending={pending} movieItems={movieItems} onGoToTrailerCLick={this.goToTrailer} handleScroll={this.fetchMore}></MovieList>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        error: state.movies.error,
        scrolling: state.movies.scrolling,
        pending: state.movies.pending,
        movieItems: state.movies.movieItems,
        currentPage: state.movies.currentPage
    }
}

export default withRouter(connect(mapStateToProps, { fetchMovies })(MovieListContainer));