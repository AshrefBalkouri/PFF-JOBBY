import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMydemandesoffers } from '../Redux/Actions/DemandesActions';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS Bootstrap

const MyDemandesOffers = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.user);
  
  useEffect(() => {
    dispatch(getMydemandesoffers(user._id));
  }, [dispatch, user]);

  const demandes = useSelector(state => state.DemandesReducer.demandes);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Accepté':
        return 'table-success';
      case 'Refusé':
        return 'table-danger';
      case 'En attente':
        return 'table-warning';
      default:
        return '';
    }
  };

  return (
    <div className="container mt-4" >
      <h3 className="text-center mb-4">Mes demandes</h3>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Statut</th>
            <th scope="col">Intitulé du Poste</th>
            <th scope="col">Entreprise</th>
            <th scope="col">Type de Contrat</th>
          </tr>
        </thead>
        <tbody>
          {
            demandes.map((el, i) => (
              <tr key={i} className={getStatusClass(el.status)}>
                <td>{el.status}</td>
                <td>{el.offer.intitulePoste}</td>
                <td>{el.ownerOffer?.name}</td>
                <td>{el.offer.contrat}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyDemandesOffers;
