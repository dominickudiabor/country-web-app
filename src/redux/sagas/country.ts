import { call, put, takeEvery } from "redux-saga/effects";

import fetchCountryService from "../../services/fetchCountryService";

import { FETCH_COUNTRIES_START } from "../../types";
import { fetchCountriesSuccess, fetchCountriesFailure } from "../actions";

function* displayLoadingScreenWhileFetching() {
  try {
    const data = yield call(fetchCountryService.fetchCountries);
    yield put(fetchCountriesSuccess(data));
  } catch (error) {
    yield put(fetchCountriesFailure(error.message));
  }
}

export default [
  takeEvery(FETCH_COUNTRIES_START, displayLoadingScreenWhileFetching),
];
