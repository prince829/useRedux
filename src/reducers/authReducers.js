import { Switch } from "react-router";
import { authConstant } from "../action/actionConst";
const initState={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    authenticated:false,
    authenticating:'',
    message:''
}
  const AuthReducers=(state=initState,action)=>{
            console.log('reducer',action);
            switch(action.type){
                case `${authConstant.USER_REGISTER}_REQUEST`: return state={
                    ...state
                }
        
                case `${authConstant.USER_REGISTER}_SUCCESS`: return state={
                    ...state,
                    message:action.payload.message
                }
        
                case `${authConstant.USER_REGISTER}_FAILURE`: return state={
                    ...state,
                    error:action.payload.error
                }
        
                default: return state;
        
            }

            
}
export default AuthReducers;