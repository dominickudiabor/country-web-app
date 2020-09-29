import {
  FILTER_COUNTRY_LIST,
  SORT_COUNTRY_LIST,
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountryListActions,
  CountryState,
} from "../../types";

export default function country(
  state: CountryState = {
    list: [],
    filteredList: [],
    isFetching: false,
    errorMessage: "",
  },

  action: CountryListActions
): CountryState {
  switch (action.type) {
  case FILTER_COUNTRY_LIST: {
    const { searchKeyword } = action.payload;

    if (searchKeyword === "") {
      return { ...state, filteredList: [...state.list], errorMessage: "" };
    }

    const filteredCountries = state.list.filter((country) =>
      country.name.toLowerCase().startsWith(searchKeyword.toLowerCase())
    );
    if (filteredCountries.length > 0) {
      return {
        ...state,
        filteredList: [...filteredCountries],
        errorMessage: "",
      };
    } else {
      return {
        ...state,
        filteredList: [],
        errorMessage: "No country found",
      };
    }
  }

  case SORT_COUNTRY_LIST: {
    const reverseCountries = state.filteredList.reverse();

    return { ...state, filteredList: [...reverseCountries] };
  }

  case FETCH_COUNTRIES_START: {
    return {
      ...state,
      isFetching: true,
    };
  }

  case FETCH_COUNTRIES_SUCCESS: {
    const { global } = action.payload;
    return {
      ...state,
      list: [...global],
      filteredList: [...global],
      isFetching: false,
      errorMessage: "",
    };
  }

  case FETCH_COUNTRIES_FAILURE: {
    const { error } = action.payload;
    return {
      ...state,
      errorMessage: error,
      isFetching: false,
    };
  }

  default:
    return state;
  }
}
