import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({dog}) => {
  const {id, name, image, weight, temperament} = dog;
  console.log("CARD: "+temperament);
  return (
    
    <div className='card'>
      <div><img src={image} alt={`Ejemplar de ${name}`} /></div>
      <div>
      <Link to={`/dogs/${id}`}> 
          <h2>Nombre: {name}</h2>
      </Link>
          <h3>Rango de peso: {weight}</h3>
          <h3>Temperamentos: {temperament}</h3>
      </div>
    </div>
    
  );
}

export default Card;