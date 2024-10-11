import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../Redux/Actions/AuthActions';

const CardUser = ({ el }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body className="text-center">
          <img 
            src={el.photo} 
            alt="Profile" 
            className="img-fluid rounded-circle mb-3" 
            style={{ width: '100px', height: '100px' }} 
          />
          <Card.Title>{el.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
          <Button onClick={() => dispatch(deleteUser(el._id))} variant='danger'>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUser;
