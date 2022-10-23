import { GET_ALL_COUNTRIES, GET_COUNTRIES_BY_NAME, GET_COUNTRY_ID } from "../actionTypes";

const initialState = {
  countries: [],
  countryDetail: {}
}


export default function rootReducer (state=initialState, actions){
  switch (actions.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries : actions.payload
      }
      
    case GET_COUNTRIES_BY_NAME:
      return {
       ...state,
        countries : actions.payload
      }

    case GET_COUNTRY_ID:
      return {
       ...state,
        countryDetail : actions.payload 
      }


    default:
      return state;
  }
}
