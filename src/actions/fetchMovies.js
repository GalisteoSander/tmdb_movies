import { fetchMoviesSuccess, fetchMoviesPending, fetchMoviesError } from './actions';
import { constructUrlsForDiscover, filterByHasImageToDisplay, concatMoviePages } from '../helpers';
import { NUMBER_OF_PAGES_TO_FETCH } from '../constants';

export default function fetchMovies(currentPage) {
    let movieUrls = constructUrlsForDiscover(currentPage, NUMBER_OF_PAGES_TO_FETCH);

    return dispatch => {
        var promises = movieUrls.map(
            url => fetch(url).then(r => r.json()))
        Promise.all(promises)
            .then(res => {
                let movies = filterByHasImageToDisplay(concatMoviePages(res));
                dispatch(
                    fetchMoviesSuccess(
                        Object.assign({}, {
                            movies: movies, currentPage: currentPage + NUMBER_OF_PAGES_TO_FETCH,
                        })));
            })
    }
}

