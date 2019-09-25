export const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_TRAILER_YOUTUBE_KEYS_SUCESS = 'FETCH_TRAILER_YOUTUBE_KEYS_SUCESS';
export const CLEAR_TRAILERS = 'CLEAR_TRAILERS';

export const fetchMoviesPending = () => {
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export const fetchMoviesSuccess = (movieResults) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        movieItems: movieResults.movies,
        currentPage: movieResults.currentPage
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        error: error
    }
}

export const fetchTrailerYoutubeKeysSuccess = (trailerKeys) => {
    return {
        type: FETCH_TRAILER_YOUTUBE_KEYS_SUCESS,
        keys: trailerKeys,
    }
}

export const clearTrailers = () => {
    return {
        type: CLEAR_TRAILERS,
    }
}
