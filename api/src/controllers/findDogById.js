const { Dog, Temperament } = require("../db");
const axios = require("axios");
const {API_KEY, URL_BASE} = process.env;
const clearInfoApi = require('./clearInfoApi');
const restaurarDogs = require("./restaurarDogs");

//! Este controller debuelve el detalle de una Raza
const findRazaById = async (idRaza) => {
  // si es numero que busque en la API 
  if(!isNaN(idRaza)){
    console.log("ENTRA AL findRazaById");
    // busco todo de la API
    const dogsAllApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
    const dogID = dogsAllApi.filter((dog) => dog.id === Number(idRaza))
    if (!dogID) throw Error("La Raza no existe");
    // filtro para eliminar algunos atributos
    const dog = clearInfoApi(dogID);
    //como el filtro me debuelve un array de 1 solo objeto, por eso los corchetes

    return dog[0];
  }
  // si no es numero que busque en la DB
  else
  {
    console.log("Entra a buscar a BD");
    const dog = await Dog.findByPk(idRaza, {
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    // if (!dog) throw Error("La Raza no existe");

    const dogDB = restaurarDogs([dog]);
    console.log(dogDB);

    return dogDB[0];
    }  
};

module.exports = findRazaById;