import actions from './postActions'

const {
    POST_SUCCESS,
    POST_REQUEST,
    POST_ERROR,
    LOAD_LOCAL_POSTS
} = actions


const initialState = {
    list: []

};

const postData = require('../data/posts.json')

export default function appReducer(state = initialState, payload) {

    switch (payload.type) {
        case LOAD_LOCAL_POSTS:
            return {
                ...state,
               list: postData
            }
            break;
     

        default:
            return state;
            break;
    }
};