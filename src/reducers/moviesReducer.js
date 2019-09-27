import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from '../actions/actionTypes';
import { TMDB_PAGE_STARTS_AT } from '../constants';

const initialState = {
    pending: false,
    movieItems: [],
    currentPage: TMDB_PAGE_STARTS_AT,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                currentPage: action.currentPage,
                movieItems: [...state.movieItems, ...action.movieItems]
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
