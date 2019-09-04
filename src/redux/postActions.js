const actions = {
    POST_REQUEST: 'POST_REQUEST',
    POST_SUCCESS: 'POST_SUCCESS',
    POST_ERROR: 'POST_ERROR',

    LOAD_LOCAL_POSTS:'LOAD_LOCAL_POSTS',

    loadPost:(payload)=>({
        type: actions.LOAD_LOCAL_POSTS,
        payload
    })



}

export default actions;