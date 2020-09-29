import React, { useContext } from "react";

import { Button } from "@material-ui/core";

import ThemeContext from "../../context/context";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { addCountryToCart } from "../../redux/actions";
import { Link } from "react-router-dom";

import "./country-details.scss";

interface CountriesProps {
  country: {
    numericCode: string;
    name: string;
    flag: string;
    languages: { name: string }[];
    population: number;
    region: string;
  };
}
const CountryDetails = ({ country }: CountriesProps) => {
  const { theme } = useContext(ThemeContext);
  const { name, flag, languages, population, region } = country;
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addCountryToCart(country));

  return (
    <div className="country-details">
      <div className="country-details__image">
        <img alt="item" src={flag} />
      </div>
      <Link style={{ textDecoration: "none" }} to={`/countries/${name}`}>
        <span style={{ color: theme.code }} className="name">
          {name}
        </span>
      </Link>

      <ul className="language">
        {languages.map((item) => (
          <li key={uuidv4()}>{item.name}</li>
        ))}
      </ul>
      <span className="population">{population.toLocaleString()}</span>
      <span className="region">{region}</span>
      <Button
        style={{ backgroundColor: theme.code }}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <span>ADD</span>
      </Button>
    </div>
  );
};

export default CountryDetails;
