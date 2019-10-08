import {
    FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS, FETCH_YOUTUBE_TRAILER_KEYS_PENDING,
    FETCH_YOUTUBE_TRAILER_KEYS_ERROR, CLEAR_TRAILERS
} from '../actions/actionTypes';

const initialState = {

    pending: true,
    keys: [],
    error: false
}

export default function (state = initialState, action) {
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
                error: true
            }
        case CLEAR_TRAILERS:
            return {
                ...state,
                error: false,
                keys: undefined
            }
        default:
            return state;
    }
}