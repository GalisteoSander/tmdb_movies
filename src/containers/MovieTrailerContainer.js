import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTrailerYoutubeKeys from '../actions/trailerActions';
import { clearTrailers } from '../actions/trailerActions'
import { selectRandomVideo, constructUrlForVideoTrailer, constructUrlToAppendVideosToMovie } from '../helpers';
import { MovieTrailer } from '../components/MovieTrailer';
import { Spinner } from '../components/Spinner';

export class MovieTrailerContainer extends Component {
    constructor(props) {
        super(props);
    }

    clearTrailers = () => {
        this.props.dispatch(clearTrailers);
    }

    componentDidMount(dispatch) {
        const urlToFetchVideoKeys = constructUrlToAppendVideosToMovie(this.props.match.params.movieId);
        this.props.dispatch(fetchTrailerYoutubeKeys(urlToFetchVideoKeys));
    }

    componentWillUnmount() {
        this.props.dispatch(clearTrailers())
    }

    render() {
        const { pending, keys, error } = this.props;
        return (
            !pending ?
                <MovieTrailer error={error} trailerUrl={constructUrlForVideoTrailer(selectRandomVideo(this.props.keys))} />
                : <Spinner />
        );
    }
}

const mapStateToProps = state => {

    return {
        keys: state.trailers.keys,
        error: state.trailers.error,
        pending: state.trailers.pending
    }
}

export default withRouter(connect(mapStateToProps, null)(MovieTrailerContainer));
