import { constructUrlToAppendVideosToMovie, filterMovieVideosByItIsTrailer, getVideoKeys } from '../helpers';
import { FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, FETCH_YOUTUBE_TRAILER_KEYS_PENDING, FETCH_YOUTUBE_TRAILER_KEYS_ERROR, CLEAR_TRAILERS } from './actionTypes';
import { BottomNavigationAction } from '@material-ui/core';

export default function fetchYoutubeTrailerKeys(movieId) {

    let movieUrls = constructUrlToAppendVideosToMovie(movieId);
    return dispatch => {
        dispatch(fetchYoutubeTrailerKeysPending());
        fetch(movieUrls)
            .then(res =>
                res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                let youtubeVideoKeys = getVideoKeys(filterMovieVideosByItIsTrailer(res.videos.results));
                dispatch(fetchYoutubeTrailerKeysSuccess(youtubeVideoKeys));
            }).catch(error => {
                dispatch(fetchYoutubeTrailerKeysError(error))
            })
    }
}

export const fetchYoutubeTrailerKeysSuccess = (trailerKeys) => {
    return {
        type: FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
        keys: trailerKeys
    }
}

export const fetchYoutubeTrailerKeysPending = (trailerKeys) => {
    return {
        type: FETCH_YOUTUBE_TRAILER_KEYS_PENDING
    }
}

export const fetchYoutubeTrailerKeysError = (error) => {
    return {
        type: FETCH_YOUTUBE_TRAILER_KEYS_ERROR,
        error: error.message
    }
}

export const clearTrailers = () => {
    return {
        type: CLEAR_TRAILERS,
    }
}
