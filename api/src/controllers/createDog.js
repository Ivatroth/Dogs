const { Dog, Temperament } = require("../db")

//! Este controller crea un nuevo Dog(Raza) en la DB y en la tabla intermedia
const createDog = async ({name, image, height, weight, life_span, temperament}) => {

    const newDog = await Dog.create({ name, image, height, weight, life_span});
    const arrTemp = temperament.split(',');
    arrTemp.forEach(async t =>  {
      //* Aqui tube que hacer una consulta a la DB de Temeramentos para poder
      //* obtener el ID del temperamento que viene del front como string
      const temperamento = t.trim();
      const temp = await Temperament.findOne({ where: { name: temperamento } });
      //console.log("console en createDogs de los temperamentos:"+ temp);
      //* porque esta funcion necesita el ID
      newDog.addTemperaments(temp.id);
    });
    
    return newDog;
  };
  
  module.exports = createDog;