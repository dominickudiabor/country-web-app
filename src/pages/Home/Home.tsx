import React, { useEffect } from "react";

import NavBar from "../../components/nav-bar/index";
import CountryDetails from "../../components/country-details/index";
import CountryLabel from "../../components/country-label";

import { v4 as uuidv4 } from "uuid";

import CircularProgress from "@material-ui/core/CircularProgress";

import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../types";
import { fetchCountriesStart } from "../../redux/actions";

import { useStyles } from "./styles";
import "./Home.scss";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesStart());
  }, [dispatch]);

  const isFetching = useSelector((state: AppState) => state.country.isFetching);

  const filteredList = useSelector(
    (state: AppState) => state.country.filteredList
  );
  const filterError = useSelector(
    (state: AppState) => state.country.errorMessage
  );

  return isFetching ? (
    <div className={classes.root}>
      <CircularProgress style={{ marginTop: "200px" }} color="inherit" />
    </div>
  ) : (
    <div className="home">
      <NavBar></NavBar>
      {filterError ? (
        <p className="home__filter-error">{filterError}</p>
      ) : (
        <div className="home__main-menu">
          <CountryLabel />
          <div className="home__country-container">
            {filteredList.map((item) => (
              <CountryDetails key={uuidv4()} country={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
