import * as actions from '../../actions/movieActions';
import * as types from '../../actions/actionTypes';


describe('actions', () => {
    it('should create an action when movies were successfully fetched', () => {
        const movieResults = {
            movies: [],
            currentPage: 1
        }

        const expectedAction = {
            type: types.FETCH_MOVIES_SUCCESS,
            movieItems: movieResults.movies,
            currentPage: movieResults.currentPage
        }
        expect(actions.fetchMoviesSuccess(movieResults)).toEqual(expectedAction)
    })

    it('should create an action when movies fetching is pending', () => {

        const expectedAction = {
            type: types.FETCH_MOVIES_PENDING,
        }
        expect(actions.fetchMoviesPending()).toEqual(expectedAction)
    })

    it('should return an error when one occurred during movie fetching', () => {

        const expectedAction = {
            error: {},
            type: types.FETCH_MOVIES_ERROR,
        }
        expect(actions.fetchMoviesError({})).toEqual(expectedAction)
    })

})


