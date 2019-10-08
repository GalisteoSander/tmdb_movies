import * as actions from '../../actions/trailerActions';
import * as types from '../../actions/actionTypes';
import fetchYoutubeTrailerKeys from '../../actions/trailerActions';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('actions', () => {
    it('should create an action when trailers were successfully fetched', () => {

        const expectedAction = {
            type: types.FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
            keys: [],
        }
        expect(actions.fetchYoutubeTrailerKeysSuccess([])).toEqual(expectedAction)
    })

    it('should create an action when trailers fetching is pending', () => {

        const expectedAction = {
            type: types.FETCH_YOUTUBE_TRAILER_KEYS_PENDING,
        }
        expect(actions.fetchYoutubeTrailerKeysPending()).toEqual(expectedAction)
    })

    it('should return an error when one occurred during movie fetching', () => {

        const expectedAction = {
            type: types.FETCH_YOUTUBE_TRAILER_KEYS_ERROR,
        }
        expect(actions.fetchYoutubeTrailerKeysError({})).toEqual(expectedAction)
    })

})

describe('async trailer actions', () => {

    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)

    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS when fetching has been done', () => {
        fetchMock.getOnce('https://api.themoviedb.org/3/movie/475557?api_key=a8663828b94db4abbb14e2c2f62a2692&append_to_response=video', {
            body: { keys: ['aKey'] },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: types.FETCH_YOUTUBE_TRAILER_KEYS_PENDING },
            {
                type: types.FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
                body: { keys: ['aKey'] }
            }
        ]
        const store = mockStore({ keys: [] })
        const url = 'https://api.themoviedb.org/3/movie/475557?api_key=a8663828b94db4abbb14e2c2f62a2692&append_to_response=video';
        return store.dispatch(fetchYoutubeTrailerKeys(url)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
