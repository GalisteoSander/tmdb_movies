import trailerKeysReducer from '../../reducers/trailerKeysReducer';
import {
    FETCH_YOUTUBE_TRAILER_KEYS_PENDING, FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
    FETCH_YOUTUBE_TRAILER_KEYS_ERROR, CLEAR_TRAILERS
} from '../../actions/actionTypes';

describe('Trailer Keys Reducer', () => {
    it('should return the initial state', () => {
        expect(trailerKeysReducer(undefined, {
            pending: true,
            keys: [],
            error: null
        })).toEqual(
            {
                pending: true,
                keys: [],
                error: null
            }
        )
    })

    it('should handle FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS', () => {
        expect(
            trailerKeysReducer({
                pending: true,
                keys: []
            }, {
                type: FETCH_YOUTUBE_TRAILER_KEYS_SUCCESS,
                keys: ['key']
            })
        ).toEqual({
            pending: false,
            keys: ['key']
        }
        )

    })

    it('should handle FETCH_YOUTUBE_TRAILER_KEYS_PENDING', () => {
        expect(
            trailerKeysReducer({
                pending: false
            }, {
                type: FETCH_YOUTUBE_TRAILER_KEYS_PENDING,
            })
        ).toEqual({
            pending: true,
        }
        )

    })

    it('should handle FETCH_YOUTUBE_TRAILER_KEYS_ERROR', () => {
        expect(
            trailerKeysReducer({
                pending: true,
            }, {
                type: FETCH_YOUTUBE_TRAILER_KEYS_ERROR,
                error: {}
            })
        ).toEqual({
            pending: false,
            error: {}
        }
        )

    })
    it('should handle CLEAR_TRAILERS', () => {
        expect(
            trailerKeysReducer({
                keys: ['key1', 'key2']
            }, {
                type: CLEAR_TRAILERS,

            })
        ).toEqual({
            keys: undefined
        }
        )

    })

})

