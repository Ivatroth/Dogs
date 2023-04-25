import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './views-pages/landing/landing';
import Home from './views-pages/home/home';
import Form from './views-pages/create-form/create-form';
import Detail from './views-pages/details/details';
import Nav from './components/nav/Nav.jsx';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getAllDogs, getTemperaments} from '../../client/src/redux/actions'


function App() {
  const dispatch = useDispatch(); 
  const {pathname} = useLocation();

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getTemperaments());
    // return(() => {
    //   clearState() 
  }, [dispatch] )


  return (
    <div className="App">

      {pathname !== "/" && <Nav />}
    
     <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route> 
        <Route path="/dogs" element={<Form />}></Route> 
        <Route path="/dogs/:idRaza" element={<Detail />}></Route> 

     </Routes>
      
    </div>
  );
}

export default App;
