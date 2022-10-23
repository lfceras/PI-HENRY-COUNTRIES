import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName } from '../../redux/actions'

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
    e.stopPropagation()
  }

  return (
    <div>
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
  )
}

export default Searchbar