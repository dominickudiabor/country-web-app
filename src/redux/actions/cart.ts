import {
  TOGGLE_HIDDEN,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  TOGGLE_THEME_MENU,
  Country,
  CartActions,
  REDUCE_CART_QUANTITY,
} from "../../types";

export function toggleHidden() {
  return {
    type: TOGGLE_HIDDEN,
  };
}

export function addCountryToCart(country: Country): CartActions {
  return {
    type: ADD_COUNTRY,
    payload: { country },
  };
}

export function clearCountryFromCart(country: Country): CartActions {
  return {
    type: REMOVE_COUNTRY,
    payload: { country },
  };
}

export function reduceCartQuantity(country: Country): CartActions {
  return {
    type: REDUCE_CART_QUANTITY,
    payload: { country },
  };
}

export function toggleThemeMenu(open: boolean) {
  return {
    type: TOGGLE_THEME_MENU,
    payload: {
      isOpen: open,
    },
  };
}
