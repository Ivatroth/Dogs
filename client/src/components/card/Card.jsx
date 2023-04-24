import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({dog}) => {
  const {id, name, image, weight, temperament} = dog;
  return (
    <div>
    <Link to={`/dogs/${id}`} className='linck'> 
    <div className='card'>
      <div><img src={image} alt={`Ejemplar de ${name}`} /></div>
      <div className='info'>
          <h1>{name}</h1>
          <h3>Rango de peso:</h3>
          <h4>{weight}</h4>
          <h3>Temperamentos:</h3>
          <h4>{temperament}</h4>
      </div>
    </div>
    </Link>
    </div>
  );
}

export default Card;