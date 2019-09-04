import { createStore, combineReducers } from 'redux'
import AppReducer from './appReducer'
import PostReducer from './postReducer'

//Combining multiple reducers to the state tree
const reducerLists = combineReducers({
    App: AppReducer,
    Posts: PostReducer
})

const store = createStore(reducerLists);
export default store;