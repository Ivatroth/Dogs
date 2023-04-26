import axios from 'axios';


export const GET_DOGS = 'GET_DOGS';
// export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_DOG_ID = 'GET_DOG_ID';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const ORDER = 'ORDER';
export const DELETE_ALL = 'DELETE_ALL';
export const CREATE_DOG ='CREATE_DOG';
export const DELETE = 'DELETE'


export const getAllDogs = () =>{
    return async function(dispach){
    try {
            const response = await axios('http://localhost:3001/dogs');
            return dispach({type: 'GET_DOGS', payload: response.data});
            
        } catch (error) {
            alert("Error: "+ error.message)
        }
    };

}

export const getNameDogs = (name) =>{
    return async function(dispach){
        try {
            const response = await axios(`http://localhost:3001/dogs/name?name=${name}`);
            return dispach({type: 'GET_DOGS', payload: response.data});         
        } catch (error) {
            window.alert("No existe raza de perros que coincida con lo buscado");
        }

    };
}

export const getDogID = (id) => {
       return async function(dispach){
            try {
                const response = await axios(`http://localhost:3001/dogs/${id}`);
                return dispach({type: 'GET_DOG_ID', payload: response.data});
            } catch (error) {
                alert("Error: " + error.message)
            }
        };
 }

export const getTemperaments = () => {
    return async function(dispach){
    try {
        const response = await axios(`http://localhost:3001/temperaments`);
        return dispach({type: 'GET_TEMPERAMENTS', payload: response.data});
            
    } catch (error) {
        alert("Error: " + error.message)
    }
    };
}

export const postCreateDogs = (newDogs) =>{
    return async function(dispach){
    try {
            const response = await axios.post('http://localhost:3001/dogs', newDogs)
            return dispach({type: 'CREATE_DOG', payload : response.data})
        } catch (error) {
            alert("Error: " + error.message)
        }
    }
}

export const filterCards = (filter) => {
    //*aca hago el filtrado
    return async function(dispach){
    try {
            const response = (await axios('http://localhost:3001/dogs')).data;
            let filtrado = []
            if( filter === 'Todos') filtrado = response;
            else if(filter === 'Api') filtrado = response.filter((dog)=> dog.created === false)
            else {
                filtrado = response.filter((dog) => dog.created === true)
                if(filtrado.length === 0) throw Error("No hay razas cargadas en la Base de Datos")
            }
            return dispach({type: 'GET_DOGS', payload: filtrado});
        } catch (error) {
            alert("Error: " + error.message)
        }
    };

  };
  
  
  export const filtarXTemper = (temp) => {

    return async function(dispach){
    try {
            const response = (await axios('http://localhost:3001/dogs')).data;
            let regExp = new RegExp(`${temp}`, 'g');
            const dogsXTemper = response.filter(dog => regExp.test(dog.temperament) === true );
            return dispach({type: 'GET_DOGS', payload: dogsXTemper})
        } catch (error) {
            alert("Error: " + error.message)
        }
    }
     
  }

    export const orderCards = (value) => {
        return  {type: 'ORDER', payload: value};      
    };

    export const deleteDog = () =>{
        return {type: DELETE}
    }
        
    export const deleteAll = () => {
        return {type: DELETE_ALL}
    }