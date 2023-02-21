import {combineReducers, createStore} from "redux"  
import datareducter from "../reducer/datareducre"
import Teamreducer from "../reducer/Teamreducer"
const rootReducer = combineReducers({datareducter,Teamreducer})



export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)