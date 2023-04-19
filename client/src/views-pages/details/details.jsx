import { useEffect} from 'react';
import './details.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogID } from '../../redux/actions';


function Details() {
  console.log('Entra a Detail');
  const {idRaza} = useParams();
  const dispatch = useDispatch();
  
  const dog = useSelector((state) => state.dog)

  useEffect(()=>{
    dispatch(getDogID(idRaza))
  },[dispatch])

  const {id, name, image, height, weight, temperament, life_span} = dog;

  return (
    <div >
      { name ? (
          <div className='detail'>
            <div>
              <h1>Informacion de la Raza: </h1>
              <h1 id='name'>{name}</h1>
            </div>
            <div className='prim'>
              <div ><img className='imgdetail' src={image} alt={`Ejemplar de ${name}`} /></div>
                <div >
                    
                    <h2>Código: </h2>
                    <h3>{id}</h3>
                    <h2>Rango de Altura: </h2>
                    <h3>{height}</h3>
                    <h2>Rango de peso: </h2>
                    <h3>{weight}</h3>
                    <h2>Años de vida: </h2>
                    <h3>{life_span}</h3>
                    <h2>Temperamentos: </h2> 
                    <h3>{temperament}</h3>
                </div>
            </div>
          </div>
        ):( <h3>Loading...</h3>)
        }
        <div >
          <Link to = "/home"><button>Volver</button></Link>
        </div>
      
    </div>
  );
}

export default Details;