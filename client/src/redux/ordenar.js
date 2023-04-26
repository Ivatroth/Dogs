
export const Ordenar = (searchO, allDogs) =>{
    switch(searchO){
        case 'Sin Orden': 
            return;
        case 'Ascendente':
            return allDogs = allDogs.sort((a, b) =>  a.name.localeCompare(b.name));
            
        case 'Descendente':
            return allDogs = allDogs.sort((a, b) =>  b.name.localeCompare(a.name));
            
        case 'Menor Peso':
          return allDogs = allDogs.sort((a, b) => a.weight.split('-')[0].trim() - b.weight.split('-')[0].trim());          
        default :
            return allDogs = allDogs.sort((a, b) => b.weight.split('-')[0].trim() - a.weight.split('-')[0].trim());
      }

  }
      
