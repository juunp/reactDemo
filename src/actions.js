const backURI = 'http://localhost:8080/api/v10/posts';

export const FETCH_POSTS_PENDING = 'FETCH_POSTS_PENDING';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        posts: posts
    }
}

export const fetchPostsPending = () => {
    return {
        type: FETCH_POSTS_PENDING
    }
}

export const fetchPostsError = error => {
    return {
        type: FETCH_POSTS_ERROR,
        error: error
    }
}