import { createStore, compose,  applyMiddleware,combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'; // no changes here 😀


import AppReducer from './appReducer'
import PostReducer from './postReducer'
import NotificationReducer from './notificationReducer'
import actions from './notificationActions';


//Combining multiple reducers to the state tree
const reducerLists = combineReducers({
    App: AppReducer,
    Posts: PostReducer,
    Notification: NotificationReducer
})

const store = createStore(reducerLists, applyMiddleware(ReduxThunk  ));


export default store;