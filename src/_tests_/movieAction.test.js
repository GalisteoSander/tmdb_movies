import * as actions from '../actions/movieActions';;
import * as types from '../actions/actionTypes';

describe('actions', () => {
    it('should create an action to add a todo', () => {

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
})