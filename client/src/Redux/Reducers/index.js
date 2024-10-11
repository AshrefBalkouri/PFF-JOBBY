import AuthReducer from "./AuthRed";
import {combineReducers} from 'redux'
import ErrorReducer from "./ErrorRed";
import OfferReducer from "./OfferRed";
import DemandesReducer from "./DemandesRed";


const rootReducer = combineReducers({AuthReducer , ErrorReducer, OfferReducer , DemandesReducer})



export default rootReducer