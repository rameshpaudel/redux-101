import { createStore, compose,  applyMiddleware,combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'; // no changes here 😀

import { logger, validLogin } from './middleware'
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


//Middleware

//Middleware are like guards for our application 
//which intercepts the data that we are injecting to the redux's state tree


  const store = createStore(reducerLists, applyMiddleware(logger, validLogin));

export default store;