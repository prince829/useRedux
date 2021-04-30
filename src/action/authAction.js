
import { authConstant } from "./actionConst";
import axios from 'axios';

export const signup=(user)=>{
    return async(dispatch)=>{
        dispatch({type:`${authConstant.USER_REGISTER}_REQUEST`});
        axios.post('https://api09.herokuapp.com/register',user).then((Response)=>{
            const msg=Response.data.message
            dispatch({type:`${authConstant.USER_REGISTER}_SUCCESS`,payload:{message:msg}});
        }).catch((Error)=>{
            dispatch({type:`${authConstant.USER_REGISTER}_FAILURE`,payload:{err:'Data not Register'}});
            })
    }

}