import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getDetailCountry } from '../../redux/actions'

const CountryDetail = () => {
  const {id} = useParams()
  //console.log(id);

const dispatch = useDispatch()

  const countryDetail =  useSelector(state => state.countryDetail)
  //console.log(countryDetail);
  useEffect(()=>{
    dispatch(getDetailCountry(id))
  },[dispatch, id])



  return (
    <div>
      <Link to={'/home'}>
        <button>Volver atras</button>
      </Link>
      <h2>CountryDetail</h2>
    </div>
  )
}

export default CountryDetail