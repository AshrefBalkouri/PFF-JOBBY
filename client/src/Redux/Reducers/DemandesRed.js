import { GETDEMANDESOWNEROFFERS, GETMYDEMANDESOFFERS } from "../ActionTypes/DemandesTypes"

const intialState = {
    demandes : [], 
    ownerDemandes : []
    
}


const DemandesReducer=(state = intialState , action )=>{
    switch (action.type) {
        
        case GETMYDEMANDESOFFERS : return {...state,demandes : action.payload}
        case GETDEMANDESOWNEROFFERS : return {...state,ownerDemandes : action.payload}

        default : return  state
           
    }

}

export default DemandesReducer