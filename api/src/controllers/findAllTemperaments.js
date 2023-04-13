
const axios = require("axios")
const {API_KEY, URL_BASE} = process.env;
const createTemp = require('./createTemperaments');

//! Este controller busca todos los temperamentos de la Api y lo guarda en la DB y lo retorna
const findAllTemperaments = async () => {
  //busco la info de la Api --> me trae todo de los perros
  const infoApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;

  //aqui extraigo de la info de la Api solo el valor del temperamento de los perros
  //obtengo un array(set para que no se repitan) de temperamentos
  let setTemp = new Set();
  //let temp = [];
  infoApi.forEach(dog => {
    if(dog.temperament) {
      let tempe = dog.temperament.split(',')
      tempe.forEach((nameTem) => setTemp.add(nameTem.trim())); 
    }
  });

  //recorro el array de temperamentos y llamo la funcion para cargar la DB
  setTemp.forEach((te) => createTemp(te));

  // Utilice el operador de dispersión para transformar un conjunto en una matriz. --> Sacado de google 
  return [...setTemp]; 
  };
  
  module.exports = findAllTemperaments;