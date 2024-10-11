import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { current, deleteProfil } from "../Redux/Actions/AuthActions";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import MyDemandesOffers from "./MyDemandesOffers";
import OwnerDemandes from "./OwnerDemandes";
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS Bootstrap

const Profil = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  const user = useSelector(state => state.AuthReducer.user);
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{   paddingTop: "28px", marginTop: "103px", paddingBottom:'100px'}} >
      <div className="border p-4 rounded shadow" style={{ width: '800px', textAlign: 'center' }}>
        <img 
          src={user.photo} 
          alt="Profile" 
          className="img-fluid rounded-circle mb-3" 
          style={{ width: '100px', height: '100px' }} 
        />
        <h1>{user.name}</h1>
        <a href={`mailto:${user?.email}`} className="text-black text-decoration-none">
                            <i className="fa-solid fa-envelope me-1"></i>
                            {user?.email}
                        </a>
         
        <div className="mb-3" style={{marginTop:"20px"}}>
          <Button as={Link} to='/UpdateProfil' variant="warning" className="me-2">
            Update Profil
          </Button>
          <Button 
            variant="danger" 
            onClick={() => dispatch(deleteProfil(user._id, navigate))}
          >
            Delete profil
          </Button>
        </div>

        {user && (
          <>
            {user.role === 'Candidat' ? <MyDemandesOffers /> : user.role === 'Entreprise' ? <OwnerDemandes /> : null}
          </>
        )}
      </div>
    </div>
  );
};

export default Profil;
