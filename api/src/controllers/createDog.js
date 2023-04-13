const { Dog } = require("../db")

//! Este controller crea un nuevo Dog(Raza) en la DB y en la tabla intermedia
const createDog = async ({name, image, height, weight, life_span, temperament}) => {

    const newDog = await Dog.create({ name, image, height, weight, life_span});
    const arrTemp = temperament.split(',');
    arrTemp.forEach(element => {
      newDog.addTemperaments(element);
    });
    
    return newDog;
  };
  
  module.exports = createDog;