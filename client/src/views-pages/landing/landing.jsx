import './landing.css';
//import Home from '../home/home'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='conteiner'>
    <selection className='grid'>
    <div className='grid_text'>
      <h2 className='grid_title'>Bienvenido</h2>

      <h2 className='grid_title grid_title--transform'> A un mundo de Perros</h2>
      <Link to = "/home" className='lincks'><h2>Ingresar</h2></Link>
    </div>
    </selection>
    </div>
  );
}

export default LandingPage;