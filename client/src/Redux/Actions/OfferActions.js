import { GETALLOFFERS, GETMYOFFERS, GETONEOFFER } from "../ActionTypes/OfferTypes"
import axios from 'axios'


export const getAllOffers=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/offer/getOffers")

        dispatch(
            {
                type : GETALLOFFERS,
                payload : res.data.Offers
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const getOneOffer=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/offer/getOneOffer/${id}`)
        
        dispatch(
            {
                type : GETONEOFFER,
                payload : res.data.oneOffer
            }
        )
    } catch (error) {
        console.log(error)
    }
}


export const AddNewOffer =(newOffer,navigate)=>async(dispatch)=>{
 
    try {
        await axios.post('/api/offer/addOffer',newOffer,{
            headers : {
                Authorized : localStorage.getItem('token')
            }
            
        })
        dispatch( getAllOffers())
        navigate('/ListOffers')
    } 
     
    catch (error) {
       console.log(error)
    }
}

export const updateOffer=(id,newCordOffer,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/offer/UpdateOffer/${id}`,newCordOffer)

        dispatch(getOneOffer())

        navigate(`/OfferDescription/${id}`)
    } catch (error)  {
        console.log(error)
         
       }

}


export const deleteOffer=(id,navigate)=>async(dispatch)=>{
    try {
       
        navigate('/ListOffers')
        dispatch(getAllOffers())


        await axios.delete(`/api/offer/deleteOffer/${id}`)

       
    } catch (error)  {
       console.log(error)
       }
}




export const getMyOffers=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/offer/getMyOffers", {
            headers : {
                Authorized : localStorage.getItem('token')
            }
            
        })

        dispatch(
            {
                type : GETMYOFFERS,
                payload : res.data.myOffers
            }
        )
    } catch (error) {
        console.log(error)
    }
}