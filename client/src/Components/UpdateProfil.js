import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { current, updateProfil } from '../Redux/Actions/AuthActions';

const UpdateProfil = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
    }, [dispatch]);

    const user = useSelector(state => state.AuthReducer.user);

    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState(user.password);
    const [email, setEmail] = useState(user.email);
    const [selectedImage, setSelectedImage] = useState(user.photo);

    useEffect(() => {
        setName(user.name);
        setPassword(user.password);
        setEmail(user.email);
        setSelectedImage(user.photo);
    }, [user]);

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        if (selectedImage === user.photo) {
            dispatch(updateProfil(user._id, { name, password, email }, navigate, false));
        } else {
            dispatch(updateProfil(user._id, { name, password, email, photo: selectedImage }, navigate, true));
        }
    };

    return (
        <div className="container " style={{    paddingTop: "10rem",paddingBottom: "5rem"}}>
            <Card className="shadow-lg" style={{backgroundColor:"rgb(16 18 21 / 84%)"}}>
                <Card.Body>
                    <h2 className="text-center mb-4" style={{color:"#ffc107"}}>Update your profil</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label style={{color:"white"}}>Profil image : </Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{color:"white"}}>Name :</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Entrez votre nom"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{color:"white"}} >Password : </Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Entrez un nouveau mot de passe"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{color:"white"}}>E-mail address :</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Entrez votre e-mail"
                            />
                        </Form.Group>

                        <Button
                            onClick={(e) => handleUpdate(e)}
                            variant="warning"
                            type="submit"
                            className="w-100"
                        >
                            Soumettre
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdateProfil;
