import React, { Component } from 'react';
import history from '../history';

class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieId } = this.props;
        return (<div>
            <img src={this.props.movieImageUrl} onClick={() => history.push(`/MovieTrailer/${movieId}`)}></img>
        </div>);
    }
}

export default MovieItem;