import React, { useEffect } from 'react';
import { getAllOffers } from '../Redux/Actions/OfferActions';
import { useDispatch, useSelector } from "react-redux";
import CardOffer from './CardOffer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS Bootstrap

const ListOffers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOffers());
  }, [dispatch]);

  const offers = useSelector(state => state.OfferReducer.offers);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100" style={{marginTop: "-40px"}}>
      <h2 className="text-center mb-4" style={{display : "flex" , justifyContent:"center" ,  color : "black", fontSize:"70px",fontWeight:"bold", fontFamily:"sans-serif" }}>Liste des Offres</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {
          offers.map((el, i) => (
            <div key={i} className="m-3" style={{ width: '300px' }}>
              <CardOffer el={el} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ListOffers;
