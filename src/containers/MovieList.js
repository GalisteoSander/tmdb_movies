import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchMovies from '../actions/fetchMovies';
import MovieItem from '../components/MovieItem';


class MovieList extends Component {
    constructor(props) {
        super(props);

        this.goToMovieTrailer = this.goToMovieTrailer.bind(this);
    }


    goToMovieTrailer = id => {
        this.props.history.push(`/MovieTrailer/${id}`)
    }

    componentDidMount() {
        const emptyMoviesArray = 0;
        if (this.props.movies.length === emptyMoviesArray) {
            this.props.fetchMovies();
        }
    }

    render() {
        const { history } = this.props;

        return (
            <div>
                <div>MovieList PlaceHolder</div>
                {this.props.movies.map(
                    item => (
                        <MovieItem key={item.id} goToTrailer={this.goToMovieTrailer} movieId={item.id} history={history} name={item.original_title} >
                        </MovieItem>
                    ))}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return { movies: state.movies.movies }
}

export default connect(mapStateToProps, { fetchMovies })(MovieList);