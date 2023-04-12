const { default: axios } = require("axios");
const { Dog, Temperament } = require("../db");
const {API_KEY, URL_BASE} = process.env;

const findAllRazas = async (query) => {

  let dogsApi = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
  dogsApi = dogsApi.filter((dog) => dog.name.includes(query) === true);


    // const dogs = await Dog.findAll({
    //   where: {
    //       name: {
    //         [Op.like]: `%${query}`,
    //       }
    //   },
    //   include: {
    //     model: Temperament,
    //     attributes: ["name"],
    //     through: {
    //       attributes: [],
    //     },
    //   },
    // });
    // if (!dogs) throw Error("La Raza no existe");
    return dogsApi;

};

module.exports = findAllRazas;