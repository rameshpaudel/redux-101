import actions from './notificationActions'

const {
    NOTIFICATION_SUCCESS,
    NOTIFICATION_CAT_SUCCESS,
    NOTIFICATION_REQUEST,
    NOTIFICATION_ERROR,
    LOAD_LOCAL_NOTIFICATIONS
} = actions


const initialState = {
    list: [],
    otherData: [],
    catImages:[]

};


export default function notificationReducer(state = initialState, payload) {
    console.log("PAYLOAD", payload.type)
    switch (payload.type) {
        case LOAD_LOCAL_NOTIFICATIONS:
            return {
                ...state,
               list: payload.data,
               count: payload.data.length
            }
            break;
        case NOTIFICATION_SUCCESS:
            return {
                ...state,
               list: payload.data,
               count: payload.data.length,
            }
            
        case NOTIFICATION_CAT_SUCCESS:
            return {
                ...state,
                catImages:[...state.catImages, payload.data] 
            }
        case NOTIFICATION_ERROR:
            return {
                ...state,
               list:[],
               error: payload.message
            }
            break;
     

        default:
            return state;
            break;
    }
};