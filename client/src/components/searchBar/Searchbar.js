import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName } from '../../redux/actions'
import styles from './searchBar.module.css'

const Searchbar = () => {

  const dispatch = useDispatch()
  const [countries, setCountries] = useState("")

  const handleChange = (e) => {
    setCountries(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getByName(countries))
    setCountries("")
  }

  return (
    <div>
      <div className={styles.barraBusqueda}>
      <label >
      <input 
      type="text" 
      name="name"
      value={countries}
      onChange={(e)=> handleChange(e)}
      placeholder='Ingrese nombre'
      />
      <button onClick={(e)=> handleSubmit(e)}>Buscar Pais</button>
      </label>
      </div>
    </div>
  )
}

export default Searchbar