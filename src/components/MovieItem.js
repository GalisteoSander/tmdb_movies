import React, { Component } from 'react';

class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieId } = this.props;
        return (<div>
            <button onClick={() => this.props.goToTrailer(movieId)}>{this.props.name}</button>
        </div>);
    }
}

export default MovieItem