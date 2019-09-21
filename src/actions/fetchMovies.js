import { fetchMoviesSuccess, fetchMoviesPending, fetchMoviesError } from './actions';


export default function fetchMovies() {
    return dispatch => {
        dispatch(fetchMoviesPending());
        //Url placeholder
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a8663828b94db4abbb14e2c2f62a2692')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchMoviesSuccess(res.results));
                console.log(res.results);
                // return res.results;
            })
            .catch(error => {
                dispatch(fetchMoviesError(error));
            })
    }
}
