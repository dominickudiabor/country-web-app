import React, { useContext } from "react";

import ThemeContext, { themes } from "../../context/context";

import { IconButton, Divider, ListItemText, List } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { useDispatch, useSelector } from "react-redux";
import { toggleThemeMenu } from "../../redux/actions";

import { AppState } from "../../types";
import { v4 as uuidv4 } from "uuid";

import useStyles from "./styles";

export default function MuiDrawer() {
  const classes = useStyles();
  const { switchTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const themeMenuAction = useSelector(
    (state: AppState) => state.cart.themeClose
  );

  const handleThemeSwitch = (item: { color?: string; code: any }) => () => {
    switchTheme(item.code);
  };
  const handleClick = () => dispatch(toggleThemeMenu(false));

  return (
    <Drawer anchor={"left"} open={themeMenuAction} onClose={handleClick}>
      <div className={classes.list} role="presentation">
        <List className={classes.header}>
          <ListItem className="drawer__header">{"SWITCH THEME"} </ListItem>
          <IconButton onClick={handleClick}>
            <ChevronLeftIcon />
          </IconButton>
        </List>
        <Divider />
        {
          <List onClick={handleClick}>
            {[themes.blue, themes.green, themes.red, themes.purple].map(
              (item) => (
                <ListItem
                  button
                  key={uuidv4()}
                  onClick={handleThemeSwitch(item)}
                >
                  <div
                    className={classes.color}
                    style={{ backgroundColor: item.code }}
                  >
                    {item.color[0]}
                  </div>
                  <ListItemText
                    primary={item.color}
                    style={{ color: item.code }}
                  />
                </ListItem>
              )
            )}
          </List>
        }
      </div>
    </Drawer>
  );
}
