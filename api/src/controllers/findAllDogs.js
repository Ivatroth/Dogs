const { Dog, Temperament } = require('../db')
const axios = require("axios")
const {API_KEY, URL_BASE} = process.env;
const clearInfoApi = require('./clearInfoApi')

//! Este controller busca y retorna todos los perros(razas), tanto de la Api
//! como de la DB
const findAllDogs = async () => {
  // busco de la API
  const dogsAllApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
  // filtro para eliminar algunos atributos
  const dogsApi = clearInfoApi(dogsAllApi);
  // busco de a DB e incluyo los temperamentos
  const dogsDB = await Dog.findAll({
     include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  }
  );

  // retorno ambos
  //! aqui tengo una diferencia entre como se muestra los temperamentos de la api y la bd
  return [...dogsApi, ...dogsDB];
  };
  
  module.exports = findAllDogs;