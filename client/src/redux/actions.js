import axios from 'axios';


export const GET_DOGS = 'GET_DOGS';
// export const GET_DOGS_NAME = 'GET_DOGS_NAME';
export const GET_DOG_ID = 'GET_DOG_ID';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
// export const FILTER = 'FILTER';
// export const ORDER = 'ORDER';
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
            return dispach({type: 'GET_DOGS', payload: response.data});
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
    //*aca hago el filtrado
    try {
        return async function(dispach){
            const response = (await axios('http://localhost:3001/dogs')).data;
            let filtrado = []
            if( filter === 'todos') filtrado = response;
            else if(filter === 'api') filtrado = response.filter((dog)=> dog.created === false)
            else filtrado = response.filter((dog) => dog.created === true)

            return dispach({type: 'GET_DOGS', payload: filtrado});
        };
    } catch (error) {
        throw Error(error.message);
    }

  };
  
export const orderCards = (value) => {
    try {
        return async function(dispach){
            const response = (await axios('http://localhost:3001/dogs')).data;

            switch(value){
                case 'nada': 
                    return dispach({type: 'GET_DOGS', payload: response});
                case 'Ascendente':
                    return dispach({type: 'GET_DOGS', payload: response.sort((a, b) =>  a.name.localeCompare(b.name))});
                case 'Descendente':
                    return dispach({type: 'GET_DOGS', payload: response.sort((a, b) =>  a.name.localeCompare(b.name)).reverse()});
                case 'menorPeso':
                    return dispach({type: 'GET_DOGS', payload: response.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim())});          
                default :
                    return dispach({type: 'GET_DOGS', payload: response.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim()).reverse()});
            }
        }
    } catch (error) {
        throw Error(error.message);
    }

  };

  export const filtarXTemper = (temp) => {

    try {
        console.log("Entra el filtarXTemper: "+temp);
        return async function(dispach){
            const response = (await axios('http://localhost:3001/dogs')).data;
            let regExp = new RegExp(`${temp}`, 'g');
            const dogsXTemper = response.filter(dog => regExp.test(dog.temperament) === true );
            console.log(dogsXTemper);
            return dispach({type: 'GET_DOGS', payload: dogsXTemper})
        }
    } catch (error) {
        throw Error(error.message);
    }
     
  }