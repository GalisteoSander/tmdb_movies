import { fetchTrailerYoutubeKeysSuccess } from './actions';
import { constructUrlToAppendVideos, filterByTrailers, getVideoKeys } from '../helpers';

export default function fetchTrailerYoutubeKeys(movieId) {
    let movieUrls = constructUrlToAppendVideos(movieId);
    return dispatch => {
        fetch(movieUrls)
            .then(res => res.json())
            .then(res => {
                let youtubeVideoKeys = getVideoKeys(filterByTrailers(res.videos.results));
                dispatch(fetchTrailerYoutubeKeysSuccess(youtubeVideoKeys));
            })
    }
}