import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Actions/AuthActions';

const NavAuth = () => {
  const token = localStorage.getItem('token');
  const user = useSelector(state => state.AuthReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Navbar 
      style={{
        backgroundColor: "#333333",
        position: 'sticky',
        top: 0,
        width: '100%',
        zIndex: 1000,
        
      }}
    >
      <Container>
        <Navbar.Brand 
          as={Link} 
          to={'/'} 
          style={{ fontSize: "50px", fontWeight: "bolder", paddingRight: "10px", marginLeft: "-30px", color: "white" }}
        >
          JOBBY
        </Navbar.Brand>

        {/* Liens à gauche */}
        <Nav className="me-auto">
          <Nav.Link 
            style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} 
            as={Link} 
            to={'/'} 
            onClick={() => window.scrollTo(0, 0)} // Scroll en haut
          >
            Home
          </Nav.Link>
          {
            token && user ? (
              <>
                <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/Profil'}>
                  Profil
                </Nav.Link>
                {
                  user?.role === 'Entreprise' &&
                  <>
                    <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/AddOffer'}>
                      Add new Offer
                    </Nav.Link>
                    <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/Myoffers'}>
                      My Offers
                    </Nav.Link>
                  </>
                }
              </>
            ) 
            : null
          }
          {
            user?.role === 'Admin' &&
            <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/ListUsers'}>
              Users
            </Nav.Link>
          }
          <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/ListOffers'}>
            Offers
          </Nav.Link>
        </Nav>

        {/* Section pour Login, Register ou Logout */}
        <Nav className="ms-auto">
          {
            token && user ? (
              <Nav.Link 
                style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} 
                onClick={() => { navigate('/'); dispatch(logout()); }}
              >
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/Register'}>
                  Register
                </Nav.Link>
                <Nav.Link style={{ fontWeight: "bold", fontSize: "18px", color: "white" }} as={Link} to={'/Login'}>
                  Login
                </Nav.Link>
              </>
            )
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavAuth;
