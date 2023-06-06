import {
  GET_COUNTRIES,
  GET_COUNTRIE_BY_NAME,
  CHANGE_PAGE,
  GET_COUNTRIES_BY_ID,
  GET_ACTIVITYS,
  FILTER_COUNTRY
} from "../actions/acctions-types";

const initialState = {

  allCountries: [],
  getCountriesByName: [],
  copyCountries: [],
  pagination: {
    currentPage: 1,
    countriePerPage: 10,
  },
  
  countryId: {},
  activities: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:

      return {
        ...state,
        allCountries: action.payload,
        copyCountries: action.payload,
      };
    case GET_ACTIVITYS:
      return {
        ...state,
        activities: action.payload,
      }
    case GET_COUNTRIE_BY_NAME:
      return {
        ...state,
        getCountriesByName: action.payload,
        pagination: {
          ...state.pagination,
          currentPage: 1,
        }
      }
    case CHANGE_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        }
      }
    
    case GET_COUNTRIES_BY_ID:
      return {
        ...state,
        countryId: action.payload,
      }
    case FILTER_COUNTRY:
      return {
        ...state,
        allCountries : action.payload,
        pagination: {
          ...state.pagination,
          currentPage: 1,
        }

      }

    default: return state;
  }
}

export default rootReducer;

