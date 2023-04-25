//! Modularizado de los filtros

export const Ordenar = (searchO, allDogs) =>{
  //* Cuando voy a hacer un ordenamiento , se lo hago al estado global
  //* porque en el estado global ya tengo filtrado los datos
      switch(searchO){
        case 'Sin Orden': 
          break
        case 'Ascendente':
            allDogs = allDogs.sort((a, b) =>  a.name.localeCompare(b.name));
            break;
        case 'Descendente':
            allDogs = allDogs.sort((a, b) =>  b.name.localeCompare(a.name));
            break
        case 'Menor Peso':
            allDogs = allDogs.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim());          
            break;
        default :
            allDogs = allDogs.sort((a, b) => b.weight.split('-')[0].trim() - a.weight.split('-')[0].trim());
      }

      }
      
      
      // import { filtarXTemper, filterCards } from "../../redux/actions";
      
      // export const FiltrarDogs = (searchF, searchT, searchO, dispatch, allDogs ) => {
      //   dispatch(filterCards(searchF))
      //   if(searchO !== 'Sin Orden'){
      //     Ordenar(searchO, allDogs);
      //   }
      //   if(searchT !== 'Todos'){
      //     FiltraXTemp(searchT, searchF, searchO, dispatch, allDogs);
      //   }
      // }
      
      // export const FiltraXTemp = (searchT, searchF, searchO, dispatch, allDogs) => {
      //   if(searchF !== 'Todo'){
      //     let regExp = new RegExp(`${searchT}`, 'g');
      //     allDogs = allDogs.filter(dog => regExp.test(dog.temperament) === true );
      //     //Ordenar(searchO, allDogs);
      //   }else{
      //     dispatch(filtarXTemper(searchT));
      //   }
      // }