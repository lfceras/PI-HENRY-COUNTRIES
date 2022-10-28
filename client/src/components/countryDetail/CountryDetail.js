import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { cleanDetails, getDetailCountry } from '../../redux/actions'

const CountryDetail = () => {
  const {id} = useParams()
  //console.log(id);


const dispatch = useDispatch()
  
  const Detail =  useSelector(state => state.countryDetail)
  //console.log(countryDetail);
  useEffect(()=>{
    dispatch(getDetailCountry(id))

  return ()=>{dispatch(cleanDetails())}
  },[dispatch,id])



  return (
    <div>
      <Link to={'/home'}>
        <button>Volver atras</button>
      </Link>
      <h2>CountryDetail</h2>
      <h1>Nombre del Pais: </h1>
      <h2>{Detail.name}</h2>
      <img 
      src={Detail.flag} 
      alt={Detail.flag} 
      style={{"borderRadius": "10%"}}
      />
      <h2>ID del Pais: </h2>
      <h3>{Detail.id}</h3>
      <h2>Continente: </h2>
      <h3>{Detail.continents}</h3>
      <h2>Nombre de la Capital: </h2>
      <h3>{Detail.capital}</h3>
      <h2>Nombre de Subregion: </h2>
      <h3>{Detail.subregion}</h3>
      <h2>Area: </h2>
      <h3>{Detail.area} km<sup>2</sup></h3>
      <h2>Poblacion: </h2>
      <h3>{Detail.population}</h3>
      <h3>Actividades: </h3>
      {
        Detail.Activities && Detail.Activities.map(el => {
          return(
            <div key={el.id}>
              <h2>Nombre de actividad: </h2>
              <h3>{el.name}</h3>
              <h2>Dificultad de actividad: </h2>
              <h3>{el.dificulty}</h3>
              <h2>Duracion de actividad: </h2>
              <h3>{el.duration}</h3>
              <h2>Temporada de actividad: </h2>
              <h3>{el.season}</h3>
            </div>
          )
        }) 
      }
    </div>
  )
}

export default CountryDetail