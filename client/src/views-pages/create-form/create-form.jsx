import { useEffect, useState } from 'react';
import './create-form.css';
import { validations } from './validations';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postCreateDogs } from '../../redux/actions';
import { restauraDog } from './restauraDog';




function Form() {

  const dispatch = useDispatch();
  //me subcsribo al estado global
  let allDogs = useSelector((state)=> state.allDogs);
  let allTemperaments = useSelector((state) => state.allTemperaments);
  //estado local
  const [input, setInput] = useState({
    name: '',
    image: '',
    heightmin: '',
    heightmax: '',
    weightmin: '',
    weightmax: '',
    life_span_min: '',
    life_span_max: '',
    temperament: '',

  });
  //estado de errores
  const [error, setError] = useState({
    name: '',
    image: '',
    heightmin: '',
    heightmax: '',
    weightmin: '',
    weightmax: '',
    life_span_min: '',
    life_span_max: '',
    temperament: '',
  });

useEffect(() => {
  if(allTemperaments.length === 0) dispatch(getTemperaments());
},[dispatch])

// cuando algun input cambie ejecutará esta funcion
const handelChange = (event) => {
  event.preventDefault();
  const value = event.target.value;
  const property = event.target.name;
  //se van agregando al estado local
  setInput({...input, [property]: value });
  // Validamos en tiompo real, a la funcion le pasamos todos los imput y que evalue de 
  // manera dinamica el input.value que estamos cambiando
  validations({...input, [property]: value}, error, setError, property)
  if(!!error.property) setInput({...input, [property]:''})

};

const handelSelect = (event) => {
  setInput({...input, temperament: input.temperament ? input.temperament + ", " + event.target.value : event.target.value});

};

const handelSubmit = () => {
  const repetido = allDogs.filter((dog)=> dog.name === input.name)
  console.log(repetido);
  if(repetido.length!==0) {
    alert("La raza ya existe en la Base de Datos");
  } else {
      //* funcion restauradora del obj Dog para que coincidan los rangos
      const objDog = restauraDog(input)
      dispatch(postCreateDogs(objDog));
      
      alert("Raza Cargada con Exito")
      setInput({
        name: '',
        image: '',
        heightmin: '',
        heightmax: '',
        weightmin: '',
        weightmax: '',
        life_span_min: '',
        life_span_max: '',
        temperament: '',
      });
    }
};

  return (
    <div className='container'>
      <h1 className='titles'>Registro de Nuevas Razas</h1>
      <div className='segucont'>
  
      <form onSubmit={handelSubmit} className='form'>

        <div className='entradas'>
          <label htmlFor="">Nombre:</label>
          <input type="text" value={input.name} name= 'name' onChange={handelChange}/>
          <p>{error.name}</p>
        </div>
        {input.name ? 
              <div className='entradas'>
                <label htmlFor="">Rango de altura:</label>
                <span> Desde  </span>
                <input id="altura_min" type="number" value={input.heightmin} name= 'heightmin' onChange={handelChange}/> <span> cm  -  </span>
                <span> Hasta  </span>
                
                <input id="altura_max" type="number" value={input.heightmax} name= 'heightmax' onChange={handelChange}/> <span> cm</span>
                <p>{error.heightmin}</p>
                <p>{error.heightmax}</p>
              </div>
              : null
        }
        {input.heightmin && input.heightmax ? 
                <div className='entradas'>
                <label htmlFor="">Rango de Peso:</label>
                <span>Desde  </span>
                <input id="peso_min" type="number" value={input.weightmin} name= 'weightmin' onChange={handelChange}/> <span>kg  -  </span>
                <span>Hasta  </span>
                <input id="peso_max" type="number" value={input.weightmax} name= 'weightmax' onChange={handelChange}/> <span>kg</span>
                <p>{error.weightmin}</p>
                <p>{error.weightmax}</p>
              </div>  
              : null
        }
        
        {input.weightmin && input.weightmax ? 
          <div className='entradas'>
            <label htmlFor="">Rango de esperanza de vida:</label>
            <span>Desde  </span>
            <input id="vida_min" type="number" value={input.life_span_min} name= 'life_span_min' onChange={handelChange}/> <span>años  -  </span>
            <span>Hasta  </span>
            <input id="vida_max" type="number" value={input.life_span_max} name= 'life_span_max' onChange={handelChange}/> <span>años</span>
            <p>{error.life_span_min}</p>
            <p>{error.life_span_max}</p>
          </div>        
          : null
        }
        
        {input.life_span_min && input.life_span_max ?
                <div className='entradas'>
                <label htmlFor="">Carga una imagen aqui:</label>
                <input type="url" value={input.image} name= 'image' onChange={handelChange}/>
                <p>{error.image}</p>
              </div>
              : null
        }

        {input.image ? 
                <div className='entradas'>
                <span>Temperamento:</span>
                  <select name = "temperaments" onChange={handelSelect}> 
                    {
                      allTemperaments.map((temp) => {
                        return (<option>{temp}</option>)
                      })
                    }
                  </select>
                  <h4>{input.temperament}</h4>
                  <p>{error.temperament}</p>
              </div>
              : null
        }

        {input.temperament            
            ? <button type="submit">Guardar</button>
            : null
        }

      </form>
      <div className='newimage'>
        <img  src={input.image} alt={input.name}/>
      </div>

      </div>
    </div>
  );
}

export default Form;
