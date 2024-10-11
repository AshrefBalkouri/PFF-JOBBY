import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getAllUsers } from '../Redux/Actions/AuthActions'
import CardUser from './CardUser'
const ListUsers = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const users = useSelector(state=> state.AuthReducer.users)
  return (
   
     
       <div style={{display : "flex" , justifyContent : "space-around" , paddingTop : "70px",paddingBottom : '100px', flexDirection:'column'}}>
          <h2 className="text-center mb-4" style={{display : "flex" , justifyContent:"center" ,  color : "black", fontSize:"70px",fontWeight:"bold", fontFamily:"sans-serif" }}>Liste des Offres</h2>
          <div style={{display : "flex" , justifyContent:'space-around'}}>
          <div  style={{display : "flex" , gap:'20px', flexWrap:'wrap', width:'81%'}}>
          {
              users.map((el,i,t)=> <CardUser key={i} el={el} />)
            }
          </div>

          </div>
        
      
    </div>

    
  )
}

export default ListUsers
