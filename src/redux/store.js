import { createStore } from 'redux'
import AppReducer from './appReducer'

// const reducerTree = () =>{
//     App: AppReducer
// }

const store = createStore(AppReducer);
export default store;