import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Actions/AuthActions';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS Bootstrap

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (a) => {
    a.preventDefault();
    if (role === '') {
      alert('Tu dois choisir un rôle');
    } else {
      dispatch(register({ name, email, password, role, photo: selectedImage }, navigate));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{marginTop:"60px"}}>
      <Form className="border p-4 rounded shadow" style={{ width: '900px' , backgroundColor : "#212529"}}>
        <h2 className="text-center mb-4" style={{color : "white"}} >Inscription</h2>

        {/* Centrer les boutons radio avec du style */}
        <div className="d-flex justify-content-center mb-3">
          <Form.Check
          style={{color : "white"}}
            reverse
            label="Entreprise"
            name="group1"
            type="radio"
            id={`reverse-'radio'-1`}
            onChange={() => setRole('Entreprise')}
            className="mx-2"
          />
          <Form.Check
          style={{color : "white"}}
            reverse
            label="Candidat"
            name="group1"
            type="radio"
            id={`reverse-'radio'-2`}
            onChange={() => setRole('Candidat')}
            className="mx-2"
          />
        </div>

        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}}>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}}>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}}>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        {/* Label et input pour la photo de profil maintenant sous le mot de passe */}
        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}} >Photo de profil</Form.Label>
          <Form.Control 
            type="file" 
            accept="image/*" 
            onChange={(e) => setSelectedImage(e.target.files[0])} 
          />
        </Form.Group>

        <Button onClick={(e) => handleRegister(e)} variant="warning" type="submit" className="w-100" style={{color : "white"}}>
          Soumettre
        </Button>
      </Form>
    </div>
  );
};

export default Register;
