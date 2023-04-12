const { Dog } = require('../db')
const axios = require("axios")
const {API_KEY, URL_BASE} = process.env;

const findAllDogs = async () => {
  const dogs = (await axios.get(`${URL_BASE}?key=${API_KEY}`)).data;
  //const dogs = await Dog.findAll();
  return dogs;
  };
  
  module.exports = findAllDogs;