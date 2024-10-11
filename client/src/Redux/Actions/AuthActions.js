import { CURRENT, FAIL, GETALLUSERS, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handelError } from "./ErrorActions"


export const register =(newUser,navigate)=>async(dispatch)=>{
    try {
        const formData = new FormData();
        formData.append('image', newUser.photo);

        const resBB = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=287456a36e978a955540e615e0d0c026',formData)
        console.log(resBB)
        const res = await axios.post('/api/auth/SignUp',{...newUser,photo : resBB.data.data.url})
        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
            
        )
           navigate('/Profil')
    } 
     
    catch (error) {
        // dispatch(
        //     {
        //         type : FAIL,
        //         payload : error.response.data.errors
        //     }
        // )

        error.response.data.errors.forEach(element => {
            dispatch(handelError(element.msg))

        });
    }
}

export const login = (cordUser,navigate) =>async (dispatch)=>{
try {
    
    const res = await axios.post('/api/auth/SignIn',cordUser)
    dispatch(
        {
            type : LOGIN,
            payload : res.data
        }
    )
    navigate('/Profil')
} catch (error) {
    dispatch(
        {
            type : FAIL,
            payload : error.response.data.errors
        }
    )
}
}

export const logout = ()=>{
    return(
        {
            type : LOGOUT
        }
    )
     
}
export const current=()=> async(dispatch)=>{
   try {
        var config = {
        headers : {
            Authorized : localStorage.getItem('token')
        }
        
    }
    const res = await axios.get('/api/auth/currentUser', config)
     dispatch(
        {
            type : CURRENT,
            payload : res.data
        }
     )
   } catch (error) {
    dispatch(
        {
            type : FAIL,
            payload : error.response.data.errors
        }
    ) 
   }
}

export const updateProfil=(id,newCordProfil,navigate,verif)=>async(dispatch)=>{
    try {
        if (verif) {
            const formData = new FormData();
            formData.append('image', newCordProfil.photo);
    
            const resBB = await axios.post('https://api.imgbb.com/1/upload?expiration=600&key=287456a36e978a955540e615e0d0c026',formData)
            console.log(resBB)
            await axios.put(`/api/auth/updateUser/${id}`,{...newCordProfil,photo : resBB.data.data.url})
        } else {
            await axios.put(`/api/auth/updateUser/${id}`,newCordProfil)
        }
   

        dispatch(current())

        navigate('/Profil')
    } catch (error)  {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        ) 
       }
}



export const deleteProfil=(id,navigate)=>async(dispatch)=>{
    try {
       
        navigate('/')
        dispatch(logout())

        await axios.delete(`/api/auth/deleteUser/${id}`)

       
    } catch (error)  {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        ) 
       }
}

export const getAllUsers=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/auth/getUsers")

        dispatch(
            {
                type : GETALLUSERS,
                payload : res.data.Users
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
       
       
        

        await axios.delete(`/api/auth/deleteUser/${id}`)
        dispatch(getAllUsers())
       
    } catch (error)  {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data.errors
            }
        ) 
       }
}