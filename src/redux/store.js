import { createStore, combineReducers } from 'redux'
import AppReducer from './appReducer'
import PostReducer from './postReducer'
import NotificationReducer from './notificationReducer'

//Combining multiple reducers to the state tree
const reducerLists = combineReducers({
    App: AppReducer,
    Posts: PostReducer,
    Notification: NotificationReducer
})

const store = createStore(reducerLists);
export default store;