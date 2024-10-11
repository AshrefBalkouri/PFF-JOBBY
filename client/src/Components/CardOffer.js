import React from 'react'
import {useDispatch, } from "react-redux"
import {Button, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const CardOffer = ({el}) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
  return (
    
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <>
      <i class="fa-solid fa-business-time"></i>
      <Card.Title> {el.intitulePoste}</Card.Title>
      </>
      <>
      <i class="fa-solid fa-building"></i>
      <Card.Title> {el.owner.name}</Card.Title> 
      </>     
        <Card.Subtitle className="mb-2 text-muted">{el?.descriptionPoste?.substring(0,50)}...</Card.Subtitle>      
        <Card.Subtitle className="mb-2 text-muted">{el.contrat}</Card.Subtitle>    
        <Link to={token ? `/OfferDescription/${el._id}` : '/Login'}><Button  variant='warning'>Voir l'offre</Button></Link>
      </Card.Body>
    </Card>
  
  
  )
}
export default CardOffer

// onClick={()=>dispatch(deleteUser(el._id))}