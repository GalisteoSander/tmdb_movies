export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMoviesPending = () => {
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        items: movies
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        error: error
    }
}