const notificationData = require('../data/notifications.json')
const actions = {
    NOTIFICATION_REQUEST: 'NOTIFICATION_REQUEST',
    NOTIFICATION_SUCCESS: 'NOTIFICATION_SUCCESS',
    NOTIFICATION_ERROR: 'NOTIFICATION_ERROR',

    LOAD_LOCAL_NOTIFICATIONS:'LOAD_LOCAL_NOTIFICATIONS',

    loadNotification:(payload)=>({
        type: actions.LOAD_LOCAL_NOTIFICATIONS,
        data: notificationData,
        payload,
    }),


    loadNotificationFromRemote:(payload)=>{

        // fetch('https://randomfox.ca/floof/')
        // .then(response => response.json())
        // .then(response => {
        //     return ({
        //         type:  actions.NOTIFICATION_SUCCESS,
        //         data: [response, {title:"TEst"}]
        //     })
        // } )
        // .catch(error => {
        //     return ({
        //         type: actions.NOTIFICATION_ERROR,
        //         message: "Error occured while performing ajax request"

        //     })
        // })
    }



}

export default actions;