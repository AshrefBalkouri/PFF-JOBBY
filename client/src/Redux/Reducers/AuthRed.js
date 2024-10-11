import { CURRENT, FAIL, GETALLUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const intialState = {
    user : {},
    errors : [],
    users : []
}


const AuthReducer=(state = intialState , action )=>{
    switch (action.type) {
        case REGISTER :
                    localStorage.setItem('token' , action.payload.token)    
                    return {...state , user : action.payload.newAccount , errors : null}
        case LOGIN : 
                    localStorage.setItem('token' , action.payload.token)
                    return {...state , user : action.payload.found , errors: null }
        case FAIL :  return {...state, errors : action.payload , user : null }
        
        case LOGOUT : 
                    localStorage.removeItem('token')
                    return { ...state , user:null , errors:null}


        case CURRENT : return{...state , user : action.payload  }

        case GETALLUSERS : return {...state,users : action.payload}
        
        default : return  state
           
    }

}

export default AuthReducer