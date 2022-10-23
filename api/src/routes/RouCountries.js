const { Router } = require('express');
const {Country, Activity} = require('../db.js')
const {loadCountry} = require('./Controllers.js')

const router = Router();


router.get('/', async (req,res)=>{
  const {name} = req.query
try {
  await loadCountry()
  let totalCountries = await Country.findAll({
    include:{
      model: Activity,
      attributes: ['name'],
      through: {
        attributes:[] 
        }
  }
  });
  if(name){
    const dataFiltered =  await totalCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    return dataFiltered.length 
    ? res.status(200).send(dataFiltered)
    : res.status(404).send("No se encontro informacion")
  }
   return res.status(200).send(totalCountries)
} catch (error) {
  console.log("ERORRRRR", error);
}
})


router.get('/:id', async (req,res)=>{
  const id = req.params.id.toUpperCase();
  try {
    await loadCountry()
    const totalCountries = await Country.findAll({
      include: {
        model: Activity,
        through: {
          attributes:[] 
          }
      }
    })
    if(id){
      const idFiltered = totalCountries.filter(el => el.id == id)
    return idFiltered.length 
    ? res.status(200).send(idFiltered)
    : res.status(404).send("No se encontro pais con ese ID")
    }
  } catch (error) {
    console.log("ERROR EN ID", error);
  }
})




module.exports = router;