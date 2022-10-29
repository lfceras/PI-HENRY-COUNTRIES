import {
  CLEAN_DETAILS,
  FILTER_BY_CONTINENT,
  GET_ALL_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRY_ID,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
} from "../actionTypes";

const initialState = {
  countries: [],
  allcountries: [],
  countryDetail: {},
};

export default function rootReducer(state = initialState, actions) {
  switch (actions.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: actions.payload.sort((a, b) => a.name.localeCompare(b.name)),
        allcountries: actions.payload.sort((a, b) =>
          a.name.localeCompare(b.name)
        ),
      };

    case FILTER_BY_CONTINENT:
      const counTries = state.countries;
      const countriesFiltered = 
        actions.payload === "All"
          ? counTries
          : counTries.filter(el => el.continents === actions.payload);
      return {
        ...state,
        allcountries: countriesFiltered,
      };

    case SORT_BY_NAME:
      if (actions.payload === "asc") {
        return {
          ...state,
          allcountries: [...state.allcountries].sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          }),
        };
      }

      if (actions.payload === "desc") {
        return {
          ...state,
          allcountries: [...state.allcountries].sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          }),
        };
      }

      if (actions.payload === "All") {
        return {
          ...state,
          allcountries: state.countries,
        };
      } else {
        return {
          ...state,
          allcountries: state.countries,
        };
      }


    case SORT_BY_POPULATION:
      let sortedPopulation = [];
      if (actions.payload === "menor") {
        sortedPopulation = [...state.allcountries].sort(
          (a, b) => a.population - b.population
        );
      }
      if (actions.payload === "mayor") {
        sortedPopulation = [...state.allcountries].sort(
          (a, b) => b.population - a.population
        );
      }
      return {
        ...state,
        allcountries: sortedPopulation,
      };

    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: actions.payload,
      };

    case GET_COUNTRY_ID:
      return {
        ...state,
        countryDetail: actions.payload,
      };

    case CLEAN_DETAILS:
      return {
        ...state,
        countryDetail: {},
      };

    default:
      return state;
  }
}
