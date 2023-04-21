import { useEffect} from 'react';
import './details.css';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDogID, deleteDogs } from '../../redux/actions';


function Details() {
  console.log('Entra a Detail');
  const {idRaza} = useParams();
  const dispatch = useDispatch();
  
  let dog = useSelector((state) => state.dog)
  useEffect(()=> {
    dispatch(getDogID(idRaza));
    return(() =>dispatch(deleteDogs()))      
  },[dispatch])
  
  console.log(dog);
  const {id, name, image, height, weight, temperament, life_span} = dog;

  return (
    <div className='detail'>
      { name ? (
          <div >
            <div>
              <h1>Informacion de la Raza: </h1>
              <h1 id='name'>{name}</h1>
            </div>
            <div className='prim'>
  
              <img  className='imgdetail' src={image} alt={`Ejemplar de ${name}`} />
          
              <div className='infor'>
                    <h2>Código:  {id} </h2>
                    <h2>Rango de Altura: {height}  Cm</h2>                    
                    <h2>Rango de peso: {weight}  Kg</h2>
                  <h2>Años de vida: {life_span}  años</h2>
                  <h2>Temperamentos:</h2>
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