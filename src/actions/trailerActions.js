import { constructUrlToAppendVideosToMovie, filterMovieVideosByItIsTrailer, getVideoKeys } from '../helpers';
import { FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, CLEAR_TRAILERS } from './actionTypes';

export default function fetchYoutubeTrailerKeys(movieId) {
    let movieUrls = constructUrlToAppendVideosToMovie(movieId);
    return dispatch => {
        fetch(movieUrls)
            .then(res => res.json())
            .then(res => {
                let youtubeVideoKeys = getVideoKeys(filterMovieVideosByItIsTrailer(res.videos.results));
                dispatch(fetchYoutubeTrailerKeysSuccess(youtubeVideoKeys));
            })
    }
}

export const fetchYoutubeTrailerKeysSuccess = (trailerKeys) => {
    return {
        type: FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
        keys: trailerKeys,
    }
}

export const clearTrailers = () => {
    return {
        type: CLEAR_TRAILERS,
    }
}
