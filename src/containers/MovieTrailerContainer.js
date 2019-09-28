import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchTrailerYoutubeKeys from '../actions/trailerActions';
import { clearTrailers } from '../actions/trailerActions'
import { selectRandomVideo, constructUrlForVideoTrailer } from '../helpers';
import { MovieTrailer } from '../components/MovieTrailer';
import { Spinner } from '../components/Spinner';

class MovieTrailerContainer extends Component {
    constructor(props) {
        super(props);
    }

    clearTrailers = () => {
        this.props.dispatch(clearTrailers);
    }

    componentDidMount(dispatch) {
        this.props.dispatch(fetchTrailerYoutubeKeys(this.props.match.params.movieId));
    }

    componentWillUnmount() {
        this.props.dispatch(clearTrailers())
    }

    render() {
        const { keys, clearTrailers, pending, error } = this.props;
        return (
            // keys && keys.length > 0 
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
