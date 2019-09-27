import { FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, CLEAR_TRAILERS } from '../actions/actionTypes';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS:
            return Object.assign({}, state, { keys: action.keys });
        case CLEAR_TRAILERS:
            return { ...state, keys: undefined };
        default:
            return state;
    }
}