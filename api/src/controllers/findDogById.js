const { Dog, Temperament } = require("../db");
const axios = require("axios");
const {API_KEY, URL_BASE} = process.env;
const clearInfoApi = require('./clearInfoApi')

//! Este controller debuelve el detalle de una Raza
const findRazaById = async (idRaza) => {
  //console.log(typeof id);
  // si es numero que busque en la API
  if(!isNaN(idRaza)){
    //! Cuando hago una consulta a la API con id por alguna razon no me trae el atributo imagen 
    //! que a su ves es un objeto, pero si lo trae cuando pido todos los perros
    //const dog = await axios.get(`${URL_BASE}/${idRaza}?key=${API_KEY}`);
    //console.log(dog);
    
    //! por tal motivo e decidido traer todo y a fuera filtrar por id
    //***** */ */
    // busco todo de la API
    const dogsAllApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
    // filtro para eliminar algunos atributos
    const dogsClear = clearInfoApi(dogsAllApi);
    const dogID = dogsClear.find((dog) => dog.id === Number(idRaza))
    //***** */ */

    return dogID;
  }
  // si no es numero que busque en la DB
  else
  {
    console.log(idRaza);
      const dog = await Dog.findByPk(idRaza, {
        include: {
          model: Temperament,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      if (!dog) throw Error("La Raza no existe");

      //*** */
      let temp ='';
      dog.Temperaments.forEach(t => {
        temp = temp ?  temp +", "+ t.name : t.name ;
      });
      const dogDB = {
          id: dog.id,
          name: dog.name,
          image: dog.image,
          height: dog.height,
          weight: dog.weight,
          life_span: dog.life_span,
          temperament: temp,
        }

      //*** */
      return dogDB;
    }  
};

module.exports = findRazaById;