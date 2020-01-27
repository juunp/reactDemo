import posts from './reducer';
import { FETCH_POSTS, FETCH_POSTS_PENDING, FETCH_POSTS_ERROR } from './actions';

describe('posts reducer', () => {
    it('should handle initial state', () => {
        expect(posts(undefined, {}))
        .toEqual({
            posts: [],
            pending: false,
            error: null
        });
    })
    it('should handle FETCH_POSTS', () => {
        expect(posts(undefined, {
            type: FETCH_POSTS,
            posts: []
        })).toEqual({
            pending: false,
            error: null,
            posts: []
        })
    })

    it('should handle FETCH_POSTS_PENDING', () => {
        expect(posts(undefined, {
            type: FETCH_POSTS_PENDING,
        })).toEqual({
            pending: true,
            error: null,
            posts: []
        })
    })

    it('should handle FETCH_POSTS_ERROR', () => {
        expect(posts(undefined, {
            type: FETCH_POSTS_ERROR,
            error: 'oups'
        })).toEqual({
            pending: false,
            error: 'oups',
            posts: []
        })
    })
})