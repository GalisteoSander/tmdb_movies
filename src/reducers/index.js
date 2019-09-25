import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import trailerKeysReducer from './trailerKeysReducer';

export const rootReducer = combineReducers({
    movies: moviesReducer,
    keys: trailerKeysReducer
});

