import { filterMovieVideosByItIsTrailer, getVideoKeys } from '../helpers';
import { FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, FETCH_YOUTUBE_TRAILER_KEYS_PENDING, FETCH_YOUTUBE_TRAILER_KEYS_ERROR, CLEAR_TRAILERS } from './actionTypes';


export default function fetchYoutubeTrailerKeys(url) {

    return dispatch => {
        dispatch(fetchYoutubeTrailerKeysPending());
        return fetch(url)
            .then(res =>
                res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                let youtubeVideoKeys = getVideoKeys(filterMovieVideosByItIsTrailer(res.videos.results));
                dispatch(fetchYoutubeTrailerKeysSuccess(youtubeVideoKeys));
            }).catch(error => {
                dispatch(fetchYoutubeTrailerKeysError())
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

export const fetchYoutubeTrailerKeysError = () => {
    return {
        type: FETCH_YOUTUBE_TRAILER_KEYS_ERROR,

    }
}

export const clearTrailers = () => {
    return {
        type: CLEAR_TRAILERS,
    }
}
