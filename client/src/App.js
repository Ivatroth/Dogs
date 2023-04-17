import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './views-pages/landing/landing';
import Home from './views-pages/home/home';
import Form from './views-pages/create-form/create-form';
import Detail from './views-pages/details/details';
import Nav from './components/nav/Nav.jsx';
import { useLocation } from 'react-router-dom';


function App() {
  const {pathname} = useLocation();
  return (
    <div className="App">

      {pathname !== "/" && <Nav />}
    
     <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route> {/* Aqui van NavBar y Cards, ademas se muestra lo de la get../dogs y get.../dogs/name */}
        <Route path="/dogs" element={<Form />}></Route> {/*Aqui va Form y se invoca la post ../dogs del server*/}
        <Route path="/dogs/:idRaza" element={<Detail />}></Route> {/*Aqui va Detail y se ivoca la /dogs/:idraza del server */}

     </Routes>
      
    </div>
  );
}

export default App;
