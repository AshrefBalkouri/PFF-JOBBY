import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteOffer, getOneOffer } from '../Redux/Actions/OfferActions';
import { current } from '../Redux/Actions/AuthActions';
import { addDemande, getMydemandesoffers } from '../Redux/Actions/DemandesActions';

const OfferDescription = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneOffer(id));
        dispatch(current());
    }, [dispatch, id]);

    const offer = useSelector(state => state.OfferReducer.offer);
    const user = useSelector(state => state.AuthReducer.user);

    useEffect(() => {
        if (user) {
            dispatch(getMydemandesoffers(user._id));
        }
    }, [dispatch, user]);

    const demande = useSelector(state => state.DemandesReducer.demandes).find(el => el.offer._id === id);

    return (
        <div className="d-flex justify-content-center mt-5"> {/* Add margin-top to push below navbar */}
            <Card className=" w-75 border-0 shadow-sm" style={{    marginTop: "8rem",marginBottom: "8rem"}}>
                <Card.Header className="d-flex align-items-center p-4 bg-warning text-white rounded-top">
                    <img 
                        src={offer?.owner?.photo} 
                        alt="Owner" 
                        className="rounded-circle me-3" 
                        style={{ width: '60px', height: '60px', border: "3px black solid" }} 
                    />
                    <div>
                        <h4 className="mb-0 text-black">{offer?.owner?.name}</h4>
                        <a href={`mailto:${offer?.owner?.email}`} className="text-black text-decoration-none">
                            <i className="fa-solid fa-envelope me-1"></i>
                            {offer?.owner?.email}
                        </a>
                    </div>
                </Card.Header>
                <Card.Body className="p-4">
                    <Card.Title className="fs-4 fw-bold">{offer.intitulePoste}</Card.Title>
                    <Card.Text className="mb-2">
                        <strong>Description:</strong> {offer.descriptionPoste}
                    </Card.Text>
                    <Card.Text>
                        <strong>Type de contrat:</strong> {offer.contrat}
                    </Card.Text>
                    <div className="mt-3">
                        {user && user._id === offer.owner?._id ? (
                            <>
                                <Link to={`/UpdateOffer/${offer._id}`} className="me-2">
                                    <Button variant="outline-warning">Modifier</Button>
                                </Link>
                                <Button onClick={() => dispatch(deleteOffer(offer._id, navigate))} variant="outline-danger">Supprimer</Button>
                            </>
                        ) : (
                            <>
                                {demande ? (
                                    <h6 className="text-muted">{demande.status}</h6>
                                ) : (
                                    <Button onClick={() => dispatch(addDemande({ offer: offer._id, ownerOffer: offer.owner._id }, navigate))} variant="outline-warning" style={{ backgroundColor: "black" }}>Postuler</Button>
                                )}
                            </>
                        )}
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted text-center" style={{ backgroundColor: '#a7acb1', color: "white" }}>Ajouté il y a 2 jours</Card.Footer>
            </Card>
        </div>
    );
};

export default OfferDescription;
