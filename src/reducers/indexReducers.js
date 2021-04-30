import { combineReducers } from "redux";
import AuthReducers   from "./authReducers";


const RootReducers=combineReducers({
    authData:AuthReducers
})
export default RootReducers