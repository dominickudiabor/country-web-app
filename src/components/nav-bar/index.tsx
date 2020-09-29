import React, { useContext } from "react";

import CartDropdown from "../cart-dropdown/index";
import MuiDrawer from "../drawer/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";
import { toggleHidden, toggleThemeMenu } from "../../redux/actions/cart";
import { AppState } from "../../types";
import { filterCountryList } from "../../redux/actions/country";

import ThemeContext from "../../context/context";

import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const hidden = useSelector((state: AppState) => state.cart.hidden);

  const cartItems = useSelector((state: AppState) => state.cart.cartItems);
  const cartItemsTotal = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  const handleClick = () => dispatch(toggleThemeMenu(true));
  const handleCartToggle = () => dispatch(toggleHidden());
  const handleChange = (e: { target: { value: string } }) =>
    dispatch(filterCountryList(e.target.value));

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ backgroundColor: theme.code }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Countries
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleChange}
            />
          </div>
          <div className={classes.grow} />
          <div>
            <IconButton color="inherit" onClick={handleCartToggle}>
              <Badge badgeContent={cartItemsTotal} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
          {!hidden && <CartDropdown />}
        </Toolbar>
      </AppBar>
      <MuiDrawer />
    </div>
  );
};

export default NavBar;
