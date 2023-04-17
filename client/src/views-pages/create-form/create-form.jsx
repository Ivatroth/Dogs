import { useState } from 'react';
import './create-form.css';
import { validations } from './validations';


function Form() {
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

// cuando algun input cambie ejecutará esta funcion
const handelChange = (event) => {
  const value = event.target.value;
  const property = event.target.name;
  //se van agregando al estado local
  setInput({...input, [property]: value });

  // Validamos en tiompo real, a la funcion le pasamos todos los imput y que evalue de 
  // manera dinamica el input.value que estamos cambiando
  validations({...input, [property]: value, error, setError});
};

  return (
    <div>
      <form action="">
        {/* name, image, height, weight, life_span, temperament */}
        <label htmlFor="">Nombre:</label>
        <input value={input.value} name= 'name' onChange={handelChange}/>
        <p>{error.name}</p>

        <label htmlFor="">Rango de altura:</label>
        <span>Desde</span>
        <input value={input.value} name= 'heightmin' onChange={handelChange}/> <span>cm</span>
        <span>Hasta</span>
        <input value={input.value} name= 'heightmax' onChange={handelChange}/> <span>cm</span>

        <p>{error.height}</p>


        <label htmlFor="">Rango de Peso:</label>
        <span>Desde</span>
        <input value={input.value} name= 'weightmin' onChange={handelChange}/> <span>kg</span>
        <span>Hasta</span>
        <input value={input.value} name= 'weightmax' onChange={handelChange}/> <span>kg</span>

        <p>{error.weight}</p>



        <label htmlFor="">Rango de esperanza de vida:</label>
        <input value={input.value} name= 'life_span' onChange={handelChange}/>
        <p>{error.life_span}</p>
        <label htmlFor="">Carga una imagen aqui:</label>
        <input value={input.value} name= 'image' onChange={handelChange}/>
        <p>{error.image}</p>

        
        {/*** Ver como hacer esto*/}
        <label htmlFor="">Selcciona los temperamentos</label>
        <input type="text" />
        <p>{error.temperament}</p>

      </form>
      <button></button>
    </div>
  );
}

export default Form;