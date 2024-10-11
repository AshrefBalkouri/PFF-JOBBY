import axios from "axios"
import { GETDEMANDESOWNEROFFERS, GETMYDEMANDESOFFERS } from "../ActionTypes/DemandesTypes"

export const getMydemandesoffers=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/demande/getDemandeByOwner/${id}`)

        dispatch(
            {
                type : GETMYDEMANDESOFFERS,
                payload : res.data.Demandes
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getMydemandesOwnerOffers=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/demande/getDemandeByOwnerOffer/${id}`)

        dispatch(
            {
                type : GETDEMANDESOWNEROFFERS,
                payload : res.data.Demandes
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addDemande=(cordDemande,navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/demande/addDemande',cordDemande, {
            headers : {
                Authorized : localStorage.getItem('token')
            }
            
        })

        // dispatch(getMydemandesoffers())

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}

export const updateDemande=(id,idUser,newStatus)=>async(dispatch)=>{
    try {
        await axios.put(`/api/demande/updateDemande/${id}`,newStatus)

        dispatch(getMydemandesOwnerOffers(idUser))

   
    } catch (error)  {
        console.log(error)
}}

