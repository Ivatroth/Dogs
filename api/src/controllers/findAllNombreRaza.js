const { default: axios } = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY, URL_BASE } = process.env;
const clearInfoApi = require('./clearInfoApi');
const { Op } = require('sequelize')

//! Este controller busca y filtra las razas de perros segun una coincidencia(pasado por query) en el name
const findAllRazas = async (query) => {

  //busco la info de la Api
  let dogsAllApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
  //la filtro por el query
  let regExp = new RegExp(`${query}`, 'i');
  dogsAllApi = dogsAllApi.filter((dog) => regExp.test(dog.name) === true);

  //limpia la info de la api para sacar algunos argumentos
  const dogsApi = clearInfoApi(dogsAllApi);

  //busco la info de la DB con el filtro 
  //! me da error cuando no tengo nada el la DB de dogs
  //! tengo que cargar la tabla Temperament,luego crear un Dogs y recien 
  //! correr este modulo.
  const dogsDB = await Dog.findAll({
      where: {
          name: {
            [Op.iLike]: `%${query}%`,
          }
      },
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
  });

console.log(dogsDB);

  const dogs = [...dogsApi, ...dogsDB];
if (dogs.length === 0) throw Error("No existe raza de perros que coincida con lo buscado");
    
  return dogs;

};

module.exports = findAllRazas;