import { filtarXTemper, orderCards } from "../../redux/actions";

//! Modularizado de los filtros



export const Ordenar = (value, searchF,setSearchO, dispatch, allDogs) =>{
    setSearchO(value);
    console.log(searchF);
    if(searchF === 'Api' || searchF === 'Base de Datos'){

      switch(value){
        case 'Ascendente':
            allDogs = allDogs.sort((a, b) =>  a.name.localeCompare(b.name));
            break;
        case 'Descendente':
            allDogs = allDogs.sort((a, b) =>  a.name.localeCompare(b.name)).reverse();
            break
        case 'Menor Peso':
            allDogs = allDogs.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim());          
            break;
        default :
            allDogs = allDogs.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim()).reverse();
      }
    } else{
      dispatch(orderCards(value));
    }
  }
  
  export const FiltraXTemp = (value, searchF, searchO, setSearchT, setSearchO, dispatch, allDogs) => {
    if(searchF === 'Api' || searchF === 'Base de Datos'){
      let regExp = new RegExp(`${value}`, 'g');
      allDogs = allDogs.filter(dog => regExp.test(dog.temperament) === true );
      //! esto no parece que este ordenando
      Ordenar(searchO, searchF,setSearchO, dispatch, allDogs);
    }else{
      dispatch(filtarXTemper(value));
    }
    setSearchT(value);
  }
