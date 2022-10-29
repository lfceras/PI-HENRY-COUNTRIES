import React from 'react'
import { Link } from 'react-router-dom'
import styles from './countryCard.module.css'

const CountryCard = ({id,flag, name, continents,population}) => {
  return (
    <div>
        <div className={styles.cards}>
        <Link to={`/country/${id}`}>
            <img 
            src={flag} 
            alt={flag}
            className={styles.image}/>
            <h3>{name}</h3>  
            </Link>
            <label>Nombre de Continente: </label>
            <h3>{continents}</h3>
            <label>Poblacion: </label>
            <h4>{population}</h4>
        </div>
    </div>
  )
}

export default CountryCard