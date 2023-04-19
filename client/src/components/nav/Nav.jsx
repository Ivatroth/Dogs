import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
    <div className='nav'></div>
        
        <div className='men' >
          <div className='titule'>
              <Link to="/home"><h3>Home </h3></Link>
          </div>
          <div  className='titule'>
              <Link to="/dogs"><h3> Nueva Raza</h3></Link>
          </div>
        </div>
    </nav>

  );
}

export default Nav;