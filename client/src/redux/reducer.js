import { GET_DOGS, GET_DOGS_NAME, GET_DOG_ID, FILTER, ORDER, GET_TEMPERAMENTS } from "./actions";

const initialState = {
    allDogs: [],
    allTemperaments: [],
    dog:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DOGS: 
        return{
          ...state,
          allDogs: action.payload,
        }

      case GET_DOGS_NAME:
        return{
          ...state,
          allDogs: action.payload
        }
      
      case GET_DOG_ID:
        return{
          ...state,
          dog: action.payload
        }
          
      case GET_TEMPERAMENTS:
        return{
          ...state,
          allTemperaments: action.payload
        }
        
      case FILTER:
          let filtrar = []
          if(action.payload === 'todos') filtrar = state.allDogs
          else if(action.payload === 'api') filtrar = state.allDogs.filter((dog)=> dog.created === false)
          else filtrar = state.allCharacters.filter((dog) => dog.created === true)
          return {
            ...state,
            allDogs: filtrar,
          }

      case  ORDER:
        
          const ordenado = state.allDogs.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });//!esto no me esta ordenando
          //console.log(ordenado);
          const porPeso = state.allDogs.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim() );
          //console.log(porPeso);
          
          if(action.payload === "Ascendente") {
            return {
              ...state,
              allDogs: ordenado
            };
          } else if(action.payload === "Descendente"){
            return {
              ...state,
              allDogs: ordenado.reverse()
            }  
         } else if(action.payload === "mayorPeso"){
          return {
            ...state,
            allDogs: porPeso
          }
         }
         else {
          return {
            ...state,
            allDogs: porPeso.reverse()
          }
         }

      default:
        return { ...state };
    }
  };
  
  export default rootReducer;
  // else if(action.payload === 'temperaments') {
  //   filtrar = state.allDogs.filter
  //   return{
  //     ...state,
  //     allDogs: 

  //   }
  // }