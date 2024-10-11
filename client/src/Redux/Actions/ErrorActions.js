import { CLEARERROR, HANDELERROR } from "../ActionTypes/ErrorTypes"

export const handelError = (msg)=>(dispatch)=>{
const id = Math.random()

dispatch(
    {
        type : HANDELERROR,
        payload : {msg,id}
    }
)
setTimeout(()=>{
dispatch(
    {
        type : CLEARERROR,
        payload : id
    }
)

},3000)

}