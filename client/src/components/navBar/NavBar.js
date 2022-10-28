import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Searchbar from '../searchBar/Searchbar'





const NavBar = () => {

  return (
    <div>
      <Searchbar/>
      <label>Buscar por Continentes</label>
      <select>
        <option value="">----</option>
      </select>

    <label>Buscar por actividad</label>
    <select>
      <option value="">----</option>
    </select>

    <label>Ordenar por: </label>
    <select>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>

    <label>Ordenar por poblacion: </label>
    <select>
      <option value="mayor">Mayor</option>
      <option value="menor">Menor</option>
    </select>

    </div>
  )
}

export default NavBar