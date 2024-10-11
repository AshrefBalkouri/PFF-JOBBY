import { CLEARERROR, HANDELERROR } from "../ActionTypes/ErrorTypes"

const intialState = []

const ErrorReducer = (state = intialState , action )=>{

    switch (action.type) {
     
         case HANDELERROR : return[...state , action.payload]
         case CLEARERROR : return state.filter((el,i,t)=>el.id !== action.payload)
        default: return state
           
    }

}

export default ErrorReducer