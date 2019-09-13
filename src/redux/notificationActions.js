const notificationData = require('../data/notifications.json')
const actions = {
    NOTIFICATION_REQUEST: 'NOTIFICATION_REQUEST',
    NOTIFICATION_SUCCESS: 'NOTIFICATION_SUCCESS',
    NOTIFICATION_ERROR: 'NOTIFICATION_ERROR',

    LOGIN_ERROR: "LOGIN_ERROR",

    NOTIFICATION_CAT_REQUEST: 'NOTIFICATION_CAT_REQUEST',
    NOTIFICATION_CAT_SUCCESS: 'NOTIFICATION_CAT_SUCCESS',
    NOTIFICATION_CAT_ERROR: 'NOTIFICATION_CAT_ERROR',

    LOAD_LOCAL_NOTIFICATIONS:'LOAD_LOCAL_NOTIFICATIONS',
    LOAD_REMOTE_NOTIFICATIONS:'LOAD_REMOTE_NOTIFICATIONS',

    loadNotification:(payload)=>({
        type: actions.LOAD_LOCAL_NOTIFICATIONS,
        data: notificationData,
        payload,
    }),
    notificationSuccess:(payload)=>({
        type: actions.NOTIFICATION_SUCCESS,
        data: payload,
    }),
    notificationCatSuccess:(payload)=>({
        type: actions.NOTIFICATION_CAT_SUCCESS,
        data: payload,
    }),


    loadNotificationFromRemote:(payload)=>{
        return (dispatch)=>{
            fetch('https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/')
                .then(response => response.json())
                .then(response => {
                    return dispatch(actions.notificationCatSuccess(response));
                } )
                .catch(error => {
                    return dispatch(({
                        type: actions.NOTIFICATION_CAT_ERROR,
                        message: "Error occured while performing ajax request"
        
                    }))
                })
        }
        
    }



}

export default actions;