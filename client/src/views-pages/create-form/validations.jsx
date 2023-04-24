

export const validations = (input, error, setError, property) => {


    switch(property){

      case 'name':
          if(!input.name) setError({ ...error, name: "Ingrese un nombre de Raza" });
          else if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(input.name)) setError({ ...error, name: "El nombre solo puede contener letras" });
          else if(input.name.length > 40)setError({ ...error, name: "El nombre no debe superar los 20 caracteres" });
          else setError({...error, name: ""});
          return error;

      case 'heightmin':
          console.log('heightmin');
          if(!input.heightmin) setError({...error, heightmin: "Ingrese la altura minima"});
          else if(!/^[0-9]+$/.test(input.heightmin)) setError({...error, heightmin: "Ingrese solo numeros positivos"});
          else setError({...error, heightmin: ""});
          return error;

      case 'heightmax':
        console.log('heightmax');
          if(!input.heightmax) setError({...error, heightmax: "Ingrese la altura maxima"});
          else if(!/^[0-9]+$/.test(input.heightmax)) setError({...error, heightmax: "Ingrese solo numeros positivos"});
          else if(Math.abs(input.heightmax) < Math.abs(input.heightmin)) setError({...error, heightmax: "La altura mayor no puede ser menor a la altura menor"});
          else setError({...error, heightmax: ""});      
          return error;

      case 'weightmin':
          if(!input.weightmin) setError({...error, weightmin: "Ingrese el menor peso"});
          else if(!/^[0-9]+$/.test(input.weightmin)) setError({...error, weightmin: "Ingrese solo numeros positivos"});
          else setError({...error, weightmin: ""});
          return error;

      case 'weightmax':
          if(!input.weightmax) setError({...error, weightmax: "Ingrese el mayor peso"});
          else if(!/^[0-9]+$/.test(input.weightmax)) setError({...error, weightmax: "Ingrese solo numeros positivos"});
          else if(Math.abs(input.weightmax) < Math.abs(input.weightmin)) setError({...error, weightmax: "El mayor peso no puede ser menor al menor peso"});
          else setError({...error, weightmax: ""});
          return error;
            
      case 'life_span_min':
          if(!input.life_span_min) setError({...error, life_span_min: "Ingrese la esperanza de vida menor"});
          else if(!/^[0-9]+$/.test(input.life_span_min)) setError({...error, life_span_min: "Ingrese solo numeros positivos"});
          else setError({...error, life_span_min: ""});
          return error;

      case 'life_span_max':
          if(!input.life_span_max) setError({...error, life_span_max: "Ingrese la esperanza de vida mayor"});
          else if(!/^[0-9]+$/.test(input.life_span_max)) setError({...error, life_span_max: "Ingrese solo numeros positivos"});
          else if(Math.abs(input.life_span_max) < Math.abs(input.life_span_min)) setError({...error, life_span_max: "La la esperanza de vida mayor no puede ser menor a la esperanza de vida menor"});
          else setError({...error, life_span_max: ""}); 
          return error;

      case 'image':
          if(!input.image) setError({...error, image: "Ingrese la url de la imagen"})
          else if(!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(input.image))
          setError({...error, image: "Ingrese una url valida"})
          else setError({...error, image: ""});  
          return error;

      case 'temperaments':
          if(!input.temperament) setError({...error, temperament: "Seleccione al menos un temperamento"})
          else setError({...error, temperament: ""}); 
          return error;

      default: return error;
    }

  }

