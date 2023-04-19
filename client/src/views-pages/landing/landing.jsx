import './landing.css';
//import Home from '../home/home'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className='landing'>
      <h1>Estoy en el Landing Page</h1>
      <Link to = "/home"><button>Home</button></Link>
    </div>
  );
}

export default LandingPage;