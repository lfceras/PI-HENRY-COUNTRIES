const axios = require('axios')
const {Country, Activity} = require('../db.js')

const getAllCountries = async ()=>{
  try {
  const allData = await axios.get(`https://restcountries.com/v3/all`)
  const response = await allData.data?.map(el => {
    return{
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[1] ? el.flags[1] : "Not found",
      continents: el.continents[0],
      capital: el.capital ? el.capital[0] : "",
      subregion: el.subregion,
      population: el.population,
      area: el.area
      }
  })
  return response
  } catch (error) {
    console.log("ERROR EN LA DATA", error);
  }
}

const myDataBase = async ()=>{
  const localDb = await Country.findAll()
  if(!localDb.length){
    const allCountries = await getAllCountries()
    await Country.bulkCreate(allCountries)
  }
}
const loadCountry = async () =>{ await myDataBase()}
loadCountry() 

module.exports = {
  loadCountry
}
