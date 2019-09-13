import actions from './notificationActions'

const {
    NOTIFICATION_SUCCESS,
    NOTIFICATION_CAT_SUCCESS,
    NOTIFICATION_REQUEST,
    NOTIFICATION_ERROR,
    LOGIN_ERROR,
    LOAD_LOCAL_NOTIFICATIONS
} = actions


const initialState = {
    list: [],
    otherData: [],
    catImages:[]

};


export default function notificationReducer(state = initialState, payload) {
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

        case LOGIN_ERROR:{
            return {
                ...state,
                error:"Error while logging in t"
            }
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