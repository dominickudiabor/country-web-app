import {
  FILTER_COUNTRY_LIST,
  SORT_COUNTRY_LIST,
  CountryListActions,
  Country,
} from "../../types";

export function filterCountryList(searchKeyword: string): CountryListActions {
  return {
    type: FILTER_COUNTRY_LIST,
    payload: { searchKeyword },
  };
}

export function sortCountriesAlphabetically(): CountryListActions {
  return {
    type: SORT_COUNTRY_LIST,
  };
}

export function fetchCountriesStart(): CountryListActions {
  return {
    type: "FETCH_COUNTRIES_START",
  };
}

export function fetchCountriesSuccess(global: Country[]): CountryListActions {
  return {
    type: "FETCH_COUNTRIES_SUCCESS",
    payload: { global },
  };
}

export function fetchCountriesFailure(error: string): CountryListActions {
  return {
    type: "FETCH_COUNTRIES_FAILURE",
    payload: { error },
  };
}
