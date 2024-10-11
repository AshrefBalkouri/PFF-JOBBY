import React, { useEffect }  from 'react'
import { getAllOffers, getMyOffers } from '../Redux/Actions/OfferActions'
import {useDispatch, useSelector} from "react-redux"
import CardOffer from './CardOffer'



    const MyOffers = () => {
        const dispatch = useDispatch()
    
        useEffect(()=>{
            dispatch(getMyOffers())
        },[])
    
        const myOffers = useSelector(state=> state.OfferReducer.myOffers)
      return (


<div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{marginTop: "-40px"}}>
<h2 className="text-center mb-4" style={{display : "flex" , justifyContent:"center" ,  color : "black", fontSize:"70px",fontWeight:"bold", fontFamily:"sans-serif" }}>My Offres</h2>
<div className="d-flex flex-wrap justify-content-center">
  {
    myOffers.map((el, i) => (
      <div key={i} className="m-3" style={{ width: '300px' }}>
        <CardOffer el={el} />
      </div>
    ))
  }
</div>
</div>
      )
    }
  

export default MyOffers
