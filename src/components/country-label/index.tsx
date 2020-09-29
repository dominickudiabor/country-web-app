import React, { useState } from "react";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { sortCountriesAlphabetically } from "../../redux/actions";

import { useDispatch } from "react-redux";

import "./country-label.scss";

const CountryLabel = () => {
  const dispatch = useDispatch();
  const [flip, setFlip] = useState(true);
  const handleClick = () => {
    dispatch(sortCountriesAlphabetically());
    setFlip((prevValue) => !prevValue);
  };

  return (
    <div className="country-label__header">
      <div className="flag"> Flag</div>
      <div>
        <button onClick={handleClick}>
          <span className="name">Name</span>
          <span>{flip ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}</span>{" "}
        </button>
      </div>
      <div> Language</div>
      <div> Population</div>
      <div> Region</div>
    </div>
  );
};

export default CountryLabel;
