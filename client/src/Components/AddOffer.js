import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddNewOffer } from '../Redux/Actions/OfferActions';

const AddOffer = () => {
  const [intitulePoste, setIntitulePoste] = useState('');
  const [descriptionPoste, setDescriptionPoste] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [contrat, setContrat] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOffer = (a) => {
    a.preventDefault();
    dispatch(AddNewOffer({ intitulePoste, descriptionPoste, qualifications, contrat }, navigate));
  };

  return (
    <div className="container mt-5"style={{paddingBottom :'70px'}}>
      <Card className="p-4 shadow-sm" style={{backgroundColor:"rgb(16 18 21 / 84%)"}}>
        <Card.Body>
          <h3 className="text-center mb-4" style={{color:"#ffc107"}}>Add new offer</h3>
          <Form onSubmit={handleOffer}>
            <Form.Group className="mb-3">
              <Form.Label style={{color:"white"}}>Job Title :</Form.Label>
              <Form.Control
                onChange={(e) => setIntitulePoste(e.target.value)}
                type="text"
                placeholder="Enter title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{color:"white"}}>Post Description :</Form.Label>
              <Form.Control
                onChange={(e) => setDescriptionPoste(e.target.value)}
                type="text"
                placeholder="Enter description"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{color:"white"}}>Qualifications</Form.Label>
              <Form.Control
                onChange={(e) => setQualifications(e.target.value)}
                type="text"
                placeholder="Enter qualifications"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{color:"white"}}>Contract Type : </Form.Label>
              <Form.Control
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
  );
};

export default AddOffer;
