import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMydemandesOwnerOffers, updateDemande } from '../Redux/Actions/DemandesActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';

const OwnerDemandes = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.AuthReducer.user);

    useEffect(() => {
        dispatch(getMydemandesOwnerOffers(user._id));
    }, [dispatch, user]);

    const ownerDemandes = useSelector(state => state.DemandesReducer.ownerDemandes);

    return (
        <Container className="mt-4">
            <h1 className="text-center mb-4">Candidatures</h1>
            <Row>
                {ownerDemandes.map((el) => (
                    <Col md={6} lg={4} key={el._id} className="mb-4">
                        <Card className="shadow-sm">
                            <Card.Body>
                                <Card.Title>{el.offer.intitulePoste}</Card.Title>
                                <Card.Text>
                                    <strong>Statut :</strong> {el.status}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Candidat :</strong> {el.owner.name} {/* Nom du candidat */}
                                </Card.Text>
                                <Card.Text className="text-center">
                                    <img 
                                        src={el.owner.photo} 
                                        alt='Candidat' 
                                        style={{ 
                                            width: '100px', // largeur de l'image
                                            height: '100px', // hauteur de l'image
                                            borderRadius: '50%', // arrondir l'image
                                            objectFit: 'cover' // ajuster l'image
                                        }} 
                                    />
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button
                                        onClick={() => dispatch(updateDemande(el._id, user._id, { status: 'Accepted' }))}
                                        variant="warning"
                                    >
                                        Accepter
                                    </Button>
                                    <Button
                                        onClick={() => dispatch(updateDemande(el._id, user._id, { status: 'Rejected' }))}
                                        variant="danger"
                                    >
                                        Rejeter
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OwnerDemandes;
