import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../Redux/Actions/AuthActions';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le CSS Bootstrap

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (a) => {
    a.preventDefault();
    dispatch(login({ email, password }, navigate));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="border p-4 rounded shadow" style={{ width: '900px' , backgroundColor : "#212529" }}>
        <h2 className="text-center mb-4" style={{color : "white"}}>Connexion</h2>

        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}}>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{color : "white"}}>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={(e) => handleLogin(e)} variant="warning" type="submit" className="w-100">
          Soumettre
        </Button>
      </Form>
    </div>
  );
};

export default Login;
