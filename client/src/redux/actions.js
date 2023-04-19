import axios from 'axios';


export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_DOG_ID = 'GET_DOG_ID';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const CREATE_DOG ='CREATE_DOG';


export const getAllDogs = () =>{
    try {
        return async function(dispach){
            const response = await axios('http://localhost:3001/dogs');
            return dispach({type: 'GET_DOGS', payload: response.data});
        };
        
    } catch (error) {
        throw Error(error.message);
    }

}

export const getNameDogs = (name) =>{
    try {
        return async function(dispach){
            const response = await axios(`http://localhost:3001/dogs/name?name=${name}`);
            
            return dispach({type: 'GET_DOGS_NAME', payload: response.data});
        };
        
    } catch (error) {
        window.alert("No existe raza de perros que coincida con lo buscado");
        throw Error(error.message);
    }
}

export const getDogID = (id) => {
    try {
        return async function(dispach){
            const response = await axios(`http://localhost:3001/dogs/${id}`);
            return dispach({type: 'GET_DOG_ID', payload: response.data});
        };
        
    } catch (error) {
        throw Error(error.message);
    }
}

export const getTemperaments = () => {
    try {
        return async function(dispach){
            const response = await axios(`http://localhost:3001/temperaments`);
            return dispach({type: 'GET_TEMPERAMENTS', payload: response.data});
        };
        
    } catch (error) {
        throw Error(error.message);
    }
}

export const postCreateDogs = (newDogs) =>{
    try {
        return async function(dispach){
            const response = await axios.post('http://localhost:3001/dogs', newDogs)
            return dispach({type: 'CREATE_DOG', payload : response.data})
        }
    } catch (error) {
        throw Error(error.message);
    }
}

export const filterCards = (filter) => {
    
    return {type: FILTER, payload: filter}
  };
  
export const orderCards = (value) => {
    
    return {type: ORDER, payload: value}
  };