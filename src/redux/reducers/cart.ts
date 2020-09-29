import {
  TOGGLE_HIDDEN,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  TOGGLE_THEME_MENU,
  CartState,
  CartActions,
  REDUCE_CART_QUANTITY,
} from "../../types";

export default function cart(
  state: CartState = {
    hidden: false,
    cartItems: [],
    themeClose: false,
  },
  action: CartActions
): CartState {
  switch (action.type) {
  case TOGGLE_HIDDEN: {
    return { ...state, hidden: !state.hidden };
  }

  case TOGGLE_THEME_MENU: {
    const { isOpen } = action.payload;
    return {
      ...state,
      themeClose: isOpen,
    };
  }

  case ADD_COUNTRY: {
    const { country } = action.payload;
    const existingCountryInCart = state.cartItems.find(
      (cartItem) => cartItem.numericCode === country.numericCode
    );
    if (existingCountryInCart) {
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.numericCode === country.numericCode
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    }

    return {
      ...state,
      cartItems: [...state.cartItems, { ...country, quantity: 1 }],
    };
  }

  case REMOVE_COUNTRY: {
    const { country } = action.payload;
    const newCart = state.cartItems.filter(
      (cartItem) => cartItem.numericCode !== country.numericCode
    );
    return { ...state, cartItems: [...newCart] };
  }

  case REDUCE_CART_QUANTITY: {
    const { country } = action.payload;
    const existingCountryInCart = state.cartItems.find(
      (cartItem) => cartItem.numericCode === country.numericCode
    );
    if (existingCountryInCart?.quantity === 1)
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.numericCode !== country.numericCode
        ),
      };

    return {
      ...state,
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.numericCode === country.numericCode
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    };
  }

  default:
    return state;
  }
}
