import React, { useContext } from "react";

import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppState } from "../../types";

import ThemeContext from "../../context/context";
import { v4 as uuidv4 } from "uuid";

import "./country.scss";

export default function Country() {
  const { name } = useParams();
  const history = useHistory();
  const { theme } = useContext(ThemeContext);

  const countryDisplay = useSelector((state: AppState) =>
    state.country.list.find(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    )
  );

  if (!countryDisplay) {
    return <div>Country not found</div>;
  }

  const handleClick = () => history.goBack();

  return (
    <div className="country">
      <h1 className="country__header">{countryDisplay.name}</h1>
      <img
        className="country__flag"
        src={countryDisplay.flag}
        alt={countryDisplay.name}
      />

      <div className="country__sub">
        <h3 className="">Languages</h3>
        {countryDisplay.languages.map((lang) => (
          <ul key={uuidv4()}>
            {" "}
            <li>{lang.name}</li>
          </ul>
        ))}
      </div>

      <div className="country__sub">
        <h3 className="">Population</h3>
        <p className="">{countryDisplay.population.toLocaleString()}</p>
      </div>

      <div className="country__sub">
        <h3 className="">Region</h3>
        <p className="">{countryDisplay.region}</p>
      </div>

      <button
        style={{ backgroundColor: theme.code }}
        className="country__button"
        onClick={handleClick}
      >
        Return to Homepage
      </button>
    </div>
  );
}
