const loogedIn = false;

export function logger(store) {
    return function (dispatch) {
        return function (action) {
            console.log("ACTION TRIGGERED", action.type)
            return dispatch(action)
        }
    }
}


export function validLogin(store) {
    return function (dispatch) {
        return function (action) {
            if (loogedIn) {
                if (action.type === 'LOAD_LOCAL_POSTS') {
                    dispatch({ type: 'NOTIFICATION_SUCCESS', data: [{ "title": "Message from middlewar" }] })
                }
                return dispatch(action)
            }
            return dispatch({ type: "LOGIN_ERROR" })
        }
    }
}

