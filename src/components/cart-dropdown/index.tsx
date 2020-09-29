import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";

import "./cart-dropdown.scss";
import { AppState } from "../../types";
import {
  clearCountryFromCart,
  addCountryToCart,
  reduceCartQuantity,
} from "../../redux/actions";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Country } from "../../types";
import { v4 as uuidv4 } from "uuid";
import ThemeContext from "../../context/context";

const CartDropdown = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart.cartItems);
  const handleClick = (country: Country) => () =>
    dispatch(clearCountryFromCart(country));
  const addMultipleItems = (country: Country) => () =>
    dispatch(addCountryToCart(country));
  const removeItemFromCart = (country: Country) => () =>
    dispatch(reduceCartQuantity(country));

  return (
    <div className="cart">
      <div className="cart__items">
        {cart.length ? (
          cart.map((item: Country) => (
            <div className="cart__content" key={uuidv4()}>
              <img className="cart__image" src={item.flag} alt="flag" />
              <p className="cart__label">{item.name}</p>
              <div>
                <ChevronLeftIcon onClick={removeItemFromCart(item)} />
                <span className="cart__count">{item.quantity}</span>
                <ChevronRightIcon
                  onClick={addMultipleItems(item)}
                  className="cart__increase"
                />
                <DeleteIcon
                  onClick={handleClick(item)}
                  style={{ color: theme.code }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
