import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { apiURL } from "../util/apiUrl";
import SearchInput from "./SearchInput";
import FilterCountry from "./FilterCountry";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const response = await axios.get(`${apiURL}/all`);

      const data = await response.data;
      console.log(data);
      setIsLoading(false)
      setCountries(data);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getCountryByName = async(countryName) => {
  try {
    const response = await axios.get(`${apiURL}/name/${countryName}`)
    const data = await response.data;
    setCountries(data);
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false);
    setError(error.message);
  }
  }

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await axios.get(`${apiURL}/region/${regionName}`);

      const data = await res.data;
      setCountries(data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="all__country__wrapper">
    <div className="country__top">
        <div className="search">
          <SearchInput onSearch={getCountryByName}/>
        </div>

        <div className="filter">
          <FilterCountry onSelect={getCountryByRegion} />
      </div>
    </div>
 
    <div className="country__bottom">
    {isLoading && !error && <h4>Loading...</h4>}
    {error && !isLoading && <h4>{error}</h4>}

    {countries?.map((country) => (
      <Link to={`/country/${country.name.common}`}>
        <div className="country__card">
          <div className="country__img">
            <img src={country.flags.png} alt="" />
          </div>

          <div className="country__data">
            <h3>{country.name.common}</h3>
            <h6>
              {" "}
              Population:{" "}
              {new Intl.NumberFormat().format(country.population)}
            </h6>
            <h6> Region: {country.region}</h6>
            <h6>Capital: {country.capital}</h6>
          </div>
        </div>
      </Link>
    ))}
  </div>
  </div>
  );
};

export default AllCountries;
