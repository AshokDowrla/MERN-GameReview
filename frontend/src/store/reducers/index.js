import { combineReducers } from "redux"

import listReducer from "./listReducer"
import pageReducer from "./pageReducer"
import errorReducer from "./errorReducer"

export default combineReducers({
    
    err:errorReducer,
    list:listReducer,
    page:pageReducer
 
})