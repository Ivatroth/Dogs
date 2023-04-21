import { GET_DOGS, DELETE, GET_DOG_ID, GET_TEMPERAMENTS, CREATE_DOG } from "./actions";

const initialState = {
    allDogs: [],
    // copyAllDogs: [],
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
        console.log("Entra a Reducer");
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
      
      case DELETE:
        return{
          ...state,
          dog: [],
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

      // case  ORDER:
      //     return {
      //       ...state,
      //       allDogs: action.payload,
      //     }