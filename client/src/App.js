import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import ErrHandling from './Components/ErrHandling';
import UpdateProfil from './Components/UpdateProfil';
import ListUsers from './Components/ListUsers';
import AddOffer from './Components/AddOffer';
import ListOffers from './Components/ListOffers';
import OfferDescreption from './Components/OfferDescreption';
import UpdateOffer from './Components/UpdateOffer';
import MyOffers from './Components/MyOffers';
import Footer from './Components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <NavAuth  />
      
      <ErrHandling />

      <div  > {/* Ajuste cette valeur selon la hauteur de ta navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Profil' element={<PrivateRoute><Profil /></PrivateRoute>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/UpdateProfil' element={<UpdateProfil />} />
          <Route path='/ListUsers' element={<ListUsers />} />
          <Route path='/AddOffer' element={<AddOffer />} />
          <Route path='/ListOffers' element={<ListOffers />} />
          <Route path='/OfferDescription/:id' element={<OfferDescreption />} />
          <Route path='/UpdateOffer/:id' element={<UpdateOffer />} />
          <Route path='/MyOffers' element={<MyOffers />} />
        </Routes>
      </div>
    
      <Footer />
    </div>
  );
}

export default App;
