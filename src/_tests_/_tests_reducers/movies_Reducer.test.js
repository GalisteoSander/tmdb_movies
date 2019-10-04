import moviesReducer from '../../reducers/moviesReducer';
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_PENDING, FETCH_MOVIES_ERROR } from '../../actions/actionTypes';

describe('Movies Reducer', () => {
    it('should return the initial state', () => {
        expect(moviesReducer(undefined, {})).toEqual(
            {
                pending: true,
                movieItems: [],
                currentPage: 1,
                scrolling: false,
                error: null
            }
        )
    })

    it('should handle FETCH_MOVIES_SUCCESS', () => {
        expect(
            moviesReducer({
                currentPage: 1,
                movieItems: [{ title: 'asd' }]
            }, {
                type: FETCH_MOVIES_SUCCESS,
                currentPage: 3,
                movieItems: [{ title: 'asdTheSequel' }]
            })
        ).toEqual({
            pending: false,
            scrolling: false,
            currentPage: 3,
            movieItems: [{ title: 'asd' }, { title: 'asdTheSequel' }]
        }
        )

    })
    it('should handle FETCH_MOVIES_PENDING', () => {
        expect(
            moviesReducer({
                scrolling: false,
                pending: false
            }, {
                type: FETCH_MOVIES_PENDING,
            })
        ).toEqual({
            pending: true,
            scrolling: true
        }
        )

    })

    it('should handle FETCH_MOVIES_ERROR', () => {
        expect(
            moviesReducer({
                pending: true,
            }, {
                type: FETCH_MOVIES_ERROR,
                error: {}
            })
        ).toEqual({
            pending: false,
            error: {}
        }
        )

    })


})

