const { Router } = require('express');
const {Country, Activity} = require('../db.js')
const {loadCountry} = require('./Controllers.js')


const router = Router();

router.get('/', async (req,res) => {
  try {
    const activityDb = await Activity.findAll()
    return activityDb.length 
    ? res.status(200).send(activityDb)
    : res.status(404).send("No se encontraron actividades")
  } catch (error) {
    console.log("ERROR EN ACTIVITY", error);
  }
})

router.post('/', async (req, res)=>{
  const {
    name,
    dificulty,
    duration,
    season,
    countries
  } = req.body
  try {
    await loadCountry()
    if(!name || !dificulty || !duration || !season || !countries){
      res.status(404).send("Te falta llenar algunos campos")
    }
    const createActivity = await Activity.create({
    name,
    dificulty,
    duration,
    season
    })
      const country = await Country.findAll({
        where: {
          id: countries
        }})
      if(country){
        await createActivity.addCountries(country)
      }
    res.status(200).send(createActivity)
  } catch (error) {
    console.log("ERROR EN EL POST", error);
  }
})


module.exports = router;