import axios from 'axios'
import { CLEAN_DETAILS, GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_ID } from '../actionTypes'


export const getAllCountries = ()=>{
  return async (dispatch)=>{
      const res = await axios.get(`http://localhost:3001/countries`)
      dispatch({
        type : GET_ALL_COUNTRIES,
        payload: res.data
      })
   }
} 

export const getByName = (name)=>{
  return async (dispatch)=>{
    const res = await axios.get(`http://localhost:3001/countries?name=${name}`)
    dispatch({
      type: GET_COUNTRIES_BY_NAME,
      payload: res.data
    })
  }
}

export const getDetailCountry = (id)=>{
  return async (dispatch)=>{
    const res = await axios.get(`http://localhost:3001/countries/${id}`)
    dispatch({
      type: GET_COUNTRY_ID,
      payload: res.data[0]
    })
  }
}

export const cleanDetails = ()=>{
  return{
    type: CLEAN_DETAILS
  }
}