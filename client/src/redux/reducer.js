import { Ordenar } from "./ordenar";
import { GET_DOGS,DELETE, DELETE_ALL, GET_DOG_ID, GET_TEMPERAMENTS, CREATE_DOG, ORDER } from "./actions";

const initialState = {
    allDogs: [],
    //copyAllDogs: [],
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
        
      case GET_DOG_ID:
        return{
          ...state,
          dog: action.payload,
        }
          
        case GET_TEMPERAMENTS:
          return{
          ...state,
          allTemperaments: action.payload,
        }
      
      case CREATE_DOG:
        return{
          ...state,
        }

        case  ORDER:
            const mewAllDogs = Ordenar(action.payload, state.allDogs)
            return {
              ...state,
              allDogs: mewAllDogs,
            }
        
      case DELETE:
        return{
          ...state,
          dog: [],
        }
      
      case DELETE_ALL:
        return{
          ...state,
          allDogs: [],
          
        }
        
        default:
        return { ...state };
    }
  };
  
  export default rootReducer;

        // case GET_DOGS_NAME:
          
        //   return{
        //     ...state,
        //     allDogs: action.payload,
        //   }
        // case FILTER:
      //     return {
      //       ...state,
      //       allDogs: action.payload,
      //     }
