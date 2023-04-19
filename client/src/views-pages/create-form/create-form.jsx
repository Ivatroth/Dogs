import { useEffect, useState } from 'react';
import './create-form.css';
import { validations } from './validations';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postCreateDogs } from '../../redux/actions';
import { restauraDog } from './restauraDog';



function Form() {
  //me subcsribo al estado global
  const dispatch = useDispatch();
  let allTemperaments = useSelector((state) => state.allTemperaments);
  //const history = useHistory();
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

  const value = event.target.value;
  const property = event.target.name;
  //se van agregando al estado local
  setInput({...input, [property]: value });
  console.log(input);
  // Validamos en tiompo real, a la funcion le pasamos todos los imput y que evalue de 
  // manera dinamica el input.value que estamos cambiando
  setError(validations({...input, [property]: value}, error, setError));
  //validations({...input, [property]: value}, error, setError)
};

const handelSelect = (event) => {

  const value = event.target.value;
  const property = event.target.name;
  setInput({...input, temperament: input.temperament ? input.temperament + ", " + event.target.value : event.target.value});
  console.log(input.temperament);
  setError(validations({...input, [property]: value}, error, setError));
  //validations({...input, [property]: value}, error, setError)
};

//! ver el guardado de los temperamentos en la BD no se esta haciendo o no se puede recuperar uno de dos
//! NO SE ESTA GUARDANDO LA TABLA INTERMEDIA VEEERRRR

//! LAS VALIDACIONES TAMPOCO FUNCINAN ME TIRA SOLO LA ULTIMA

const handelSubmit = (event) => {
  event.preventDefault();
  console.log("Entra al handelSubmit");
  //* funcion restauradora del obj Dog para que coincidan los rangos
  console.log(input.temperament);
  const objDog = restauraDog(input)
  console.log(objDog.temperament);
  console.log(objDog); //! ****
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
  //history.push("/home")
};

  return (
    <div className='container'>
      <h1>Registro de Nuevas Razas</h1>
      <div className='segucont'>
      <form onSubmit={handelSubmit} className='form'>

        <div className='name'>
          <label htmlFor="">Nombre:</label>
          <input type="text" value={input.name} name= 'name' onChange={handelChange}/>
          <p>{error.name}</p>
        </div>

        <div className='altura'>
          <label htmlFor="">Rango de altura:</label>
          <span> Desde  </span>
          <input id="altura_min" type="number" value={input.heightmin} name= 'heightmin' onChange={handelChange}/> <span> cm  -  </span>
          <span> Hasta  </span>
          <input id="altura_max" type="number" value={input.heightmax} name= 'heightmax' onChange={handelChange}/> <span> cm</span>
          <p>{error.height}</p>
        </div>


        <div className='peso'>
          <label htmlFor="">Rango de Peso:</label>
          <span>Desde  </span>
          <input id="peso_min" type="number" value={input.weightmin} name= 'weightmin' onChange={handelChange}/> <span>kg  -  </span>
          <span>Hasta  </span>
          <input id="peso_max" type="number" value={input.weightmax} name= 'weightmax' onChange={handelChange}/> <span>kg</span>
          <p>{error.weight}</p>
        </div>


        <div className='vida'>
          <label htmlFor="">Rango de esperanza de vida:</label>
          <span>Desde  </span>
          <input id="vida_min" type="number" value={input.life_span_min} name= 'life_span_min' onChange={handelChange}/> <span>años  -  </span>
          <span>Hasta  </span>
          <input id="vida_max" type="number" value={input.life_span_max} name= 'life_span_max' onChange={handelChange}/> <span>años</span>
          <p>{error.life_span}</p>
        </div>

        <div className='image'>
          <label htmlFor="">Carga una imagen aqui:</label>
          <input type="url" value={input.image} name= 'image' onChange={handelChange}/>
          <p>{error.image}</p>
        </div>

        <div className='temper'>
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

        <button type="submit">Guardar</button>
      </form>

      <div className='newimage'>
        <img  src={input.image} alt={input.name}/>
      </div>

      </div>
    </div>
  );
}

export default Form;
