const { Dog } = require("../db");

const createDog = async ({name, image, height, weight, life_span, temperament}) => {
    const newDog = await Dog.create({ name, image, height, weight, life_span});
    newDog.addTemperaments(temperament);
    return newDog;
  };
  
  module.exports = createDog;