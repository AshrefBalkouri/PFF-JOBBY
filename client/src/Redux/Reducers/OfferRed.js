import {  GETALLOFFERS, GETMYOFFERS, GETONEOFFER } from "../ActionTypes/OfferTypes"

const intialState = {
    offers : [], 
    offer : {},
    myOffers : []
}


const OfferReducer=(state = intialState , action )=>{
    switch (action.type) {
        
        case GETALLOFFERS : return {...state,offers : action.payload}
       
        case GETONEOFFER : return  {...state , offer : action.payload}

        case GETMYOFFERS : return  {...state , myOffers : action.payload}

        default : return  state
           
    }

}

export default OfferReducer