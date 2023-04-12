const { Dog, Temperament } = require("../db");
const axios = require("axios");
const {API_KEY, URL_BASE} = process.env;

const findRazaById = async (id) => {
  //console.log(typeof id);
  if(!isNaN(id)){
    const dogs = await axios.get(`${URL_BASE}/${id}?key=${API_KEY}`);
    // const {name, image,reference_image_id, height, weight, life_span, temperament} = dogs.data
    // return {name, image, reference_image_id, height, weight, life_span, temperament};
    return dogs.data;
  }
  else
  {
      const dogs = await Dog.findByPk(id, {
        include: {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      if (!dogs) throw Error("La Raza no existe");
      return dogs;
    }  
};

module.exports = findRazaById;