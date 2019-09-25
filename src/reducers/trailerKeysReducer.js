import { FETCH_TRAILER_YOUTUBE_KEYS_SUCESS, CLEAR_TRAILERS } from '../actions/actions';


export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_TRAILER_YOUTUBE_KEYS_SUCESS:
            return Object.assign({}, state, { keys: action.keys });
        case CLEAR_TRAILERS:
            return { ...state, keys: undefined };
        default:
            return state;
    }
}