import { FETCH_MOVIES_PENDING, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR, GOING_TO_TRAILER } from './actionTypes';
import { constructUrlsForDiscover, filterMoviesByHasImageToDisplay, concatMoviePages } from '../helpers';
import { NUMBER_OF_PAGES_TO_FETCH } from '../constants';

export default function fetchMovies(currentPage) {
    let movieUrls = constructUrlsForDiscover(currentPage, NUMBER_OF_PAGES_TO_FETCH);

    return dispatch => {
        dispatch(fetchMoviesPending());
        var promises = movieUrls.map(
            url => fetch(url).then(r => r.json()))
        Promise.all(promises)
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                let movies = filterMoviesByHasImageToDisplay(concatMoviePages(res));
                dispatch(
                    fetchMoviesSuccess(
                        Object.assign({}, {
                            movies: movies, currentPage: currentPage + NUMBER_OF_PAGES_TO_FETCH,
                        })));
            })
            .catch(error => {
                dispatch(fetchMoviesError(error))
            })
    }
}

export const fetchMoviesPending = () => {
    return {
        type: FETCH_MOVIES_PENDING
    }
}

export const fetchMoviesSuccess = (movieResults) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        movieItems: movieResults.movies,
        currentPage: movieResults.currentPage
    }
}

export const fetchMoviesError = (error) => {
    return {
        type: FETCH_MOVIES_ERROR,
        error: error
    }
}

