import React from 'react'
import { Link } from 'react-router-dom'
import styles from './countryCard.module.css'

const CountryCard = ({id,flag, name, continents}) => {
  return (
    <div>
        <div className={styles.cards}>
            <img 
            src={flag} 
            alt={flag}
            className={styles.image}/>
            <label>Nombre de Pais: </label>
            <Link to={`/country/${id}`}>
            <h3>{name}</h3>  
            </Link>
            <label>Nombre de Continente: </label>
            <h3>{continents}</h3>
        </div>
    </div>
  )
}

export default CountryCard