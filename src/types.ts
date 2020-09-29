// Action types

//country actions
export const LOAD_COUNTRIES = "LOAD_COUNTRIES";
export const FILTER_COUNTRY_LIST = "FILTER_COUNTRY_LIST";
export const SORT_COUNTRY_LIST = "SORT_COUNTRY_LIST";
export const DISPATCH_ERROR_FROM_FETCH = "DISPATCH_ERROR_FROM_FETCH";
//------------------------------------>
//country saga actions
export const FETCH_COUNTRIES_START = "FETCH_COUNTRIES_START";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";
//------------------------------------>
//cart actions
export const TOGGLE_HIDDEN = "TOGGLE_HIDDEN";
export const ADD_COUNTRY = "ADD_COUNTRY";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const TOGGLE_THEME_MENU = "TOGGLE_THEME_MENU";
export const REDUCE_CART_QUANTITY = "REDUCE_CART_QUANTITY";
// Declare country type
export type Country = {
  numericCode: string;
  name: string;
  flag: string;
  languages: { name: string }[];
  population: number;
  region: string;
  quantity?: number | any;
};

export type Themes = {
  blue: {
    color: string;
    code: string;
  };
  green: {
    color: string;
    code: string;
  };
  red: {
    color: string;
    code: string;
  };
  purple: {
    color: string;
    code: string;
  };
};

//declare Anchor type
export type Anchor = "left";
//------------------------------------>
//Action types for country
export type LoadCountryList = {
  type: typeof LOAD_COUNTRIES;
  payload: {
    global: Country[];
  };
};

export type dispatchErrorFromFetch = {
  type: typeof DISPATCH_ERROR_FROM_FETCH;
  payload: {
    error: string;
  };
};

export type FilterCountryList = {
  type: typeof FILTER_COUNTRY_LIST;
  payload: {
    searchKeyword: string;
  };
};

export type SortCountryList = {
  type: typeof SORT_COUNTRY_LIST;
};

export type FetchCountriesStart = {
  type: typeof FETCH_COUNTRIES_START;
};
export type FetchCountriesSuccess = {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: {
    global: Country[];
  };
};
export type FetchCountriesFailure = {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: {
    error: string;
  };
};
//------------------------------------>
//action types for the cart
export type ToggleHiddenAction = {
  type: typeof TOGGLE_HIDDEN;
};

export type AddCountryToCartAction = {
  type: typeof ADD_COUNTRY;
  payload: {
    country: Country;
  };
};

export type RemoveCountryFromCartAction = {
  type: typeof REMOVE_COUNTRY;
  payload: {
    country: Country;
  };
};
export type ToggleThemeCloseAction = {
  type: typeof TOGGLE_THEME_MENU;
  payload: {
    direction: Anchor;
    isOpen: boolean;
  };
};
export type ReduceCartQuantityAction = {
  type: typeof REDUCE_CART_QUANTITY;
  payload: {
    country: Country;
  };
};

//------------------------------------>

//Combine actions

//cart actions
export type CartActions =
  | ToggleHiddenAction
  | RemoveCountryFromCartAction
  | AddCountryToCartAction
  | ToggleThemeCloseAction
  | ReduceCartQuantityAction;

//------------------------------------>
//country actions
export type CountryListActions =
  | LoadCountryList
  | FilterCountryList
  | SortCountryList
  | dispatchErrorFromFetch
  | FetchCountriesStart
  | FetchCountriesSuccess
  | FetchCountriesFailure;

//------------------------------------>
//------------------------------------>
//Individual States
export type CartState = {
  hidden: boolean;
  cartItems: Country[];
  themeClose: boolean;
};
//------------------------------------>
export type CountryState = {
  list: Country[];
  filteredList: Country[];
  isFetching: boolean;
  errorMessage: string;
};

//------------------------------------>
//entire state
export type AppState = {
  cart: CartState;
  country: CountryState;
};

//------------------------------------>
