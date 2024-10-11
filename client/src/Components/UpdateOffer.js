import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOneOffer, updateOffer } from '../Redux/Actions/OfferActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card} from 'react-bootstrap'


const UpdateOffer = () => { 

    const {id} = useParams()
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneOffer(id))
    },[])

    const offer = useSelector(state => state.OfferReducer.offer)

    const [intitulePoste,setIntitulePoste] = useState(offer.intitulePoste)
    const [descriptionPoste,setdescriptionPoste]= useState(offer.descriptionPoste)
    const [qualifications,setQualifications]=useState(offer.qualifications)
    const [contrat,setContrat]=useState(offer.contrat)
  
    useEffect(()=>{
        setIntitulePoste(offer.intitulePoste)
        setdescriptionPoste(offer.descriptionPoste)
        setQualifications(offer.qualifications)
        setContrat(offer.contrat)

    },[offer])

    const navigate = useNavigate()

    const handleUpdate=(e)=>{
        e.preventDefault()
        dispatch(updateOffer(id,{intitulePoste,descriptionPoste,qualifications,contrat},navigate))
    }
    return(
    //     <Form >
    //      <Form.Group >
    //     <Form.Label>Intitule Poste</Form.Label>

    //     <Form.Control value={intitulePoste} onChange={(e)=>setIntitulePoste(e.target.value)} type="text" placeholder="Enter Title" />
       
    //   </Form.Group>



    //   <Form.Group>
    //     <Form.Label>Description Poste</Form.Label>

    //     <Form.Control value={descriptionPoste} onChange={(e)=>setdescriptionPoste(e.target.value)}   type="text" placeholder="Enter Description" />
       
    //   </Form.Group>



    //   <Form.Group >
    //     <Form.Label> Qualifications </Form.Label>

    //     <Form.Control value={qualifications} onChange={(e)=>setQualifications(e.target.value)}   type="text" placeholder="Enter Qualfications" />
       
    //   </Form.Group>





    //   <Form.Group >
    //     <Form.Label> Contrat Type </Form.Label>

    //     <Form.Control value={contrat} onChange={(e)=>setContrat(e.target.value)} type="text" placeholder="Enter Contrat type" />
       
    //   </Form.Group>
        
    //     <Button onClick={(e)=>handleUpdate(e)} variant="primary"  type="submit">
    //         Submit
    //     </Button>
    // </Form>

    <div className="container mt-5"style={{paddingBottom :'70px'}}>
    <Card className="p-4 shadow-sm" style={{backgroundColor:"rgb(16 18 21 / 84%)"}}>
      <Card.Body>
        <h3 className="text-center mb-4" style={{color:"#ffc107"}}>Edit offer</h3>
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label style={{color:"white"}}>Job Title :</Form.Label>
            <Form.Control
            value={intitulePoste}
              onChange={(e) => setIntitulePoste(e.target.value)}
              type="text"
              placeholder="Enter title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{color:"white"}}>Post Description :</Form.Label>
            <Form.Control
            value={descriptionPoste}
              onChange={(e) => setdescriptionPoste(e.target.value)}
              type="text"
              placeholder="Enter description"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{color:"white"}}>Qualifications</Form.Label>
            <Form.Control
            value={qualifications}
              onChange={(e) => setQualifications(e.target.value)}
              type="text"
              placeholder="Enter qualifications"
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{color:"white"}}>Contract Type : </Form.Label>
            <Form.Control
            value={contrat}
              onChange={(e) => setContrat(e.target.value)}
              type="text"
              placeholder="Enter Contract Type"
              required
            />
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100">
            Soumettre
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </div>
    )
}


export default UpdateOffer
