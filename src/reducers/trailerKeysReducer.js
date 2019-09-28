import {
    FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, FETCH_YOUTUBE_TRAILER_KEYS_PENDING,
    FETCH_YOUTUBE_TRAILER_KEYS_ERROR, CLEAR_TRAILERS
} from '../actions/actionTypes';

const initialState = {
    pending: true,
    keys: [],
    error: null
}

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS:
            return {
                ...state,
                pending: false,
                keys: action.keys,
            }
        case FETCH_YOUTUBE_TRAILER_KEYS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_YOUTUBE_TRAILER_KEYS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case CLEAR_TRAILERS:
            return {
                ...state, keys: undefined
            }
        default:
            return state;
    }
}