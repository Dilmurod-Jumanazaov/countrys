import { Search } from "../Search/Search";
import { List } from "../List/List";
import { useState } from "react";
import { useEffect } from "react";

export const MainComp = () => {
  const [countryArr, setCountryArr] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => setCountryArr(data));
  }, []);

  function searchedCountry(evt) {
    const url = evt.target.value.length
      ? "https://restcountries.com/v3.1/name/" + evt.target.value
      : "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryArr(data));
  }

  function filteredCountry(evt) {
    const url =
      evt.target.value === "all"
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/region/${evt.target.value}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryArr(data));
  }

  return (
    <>
      <Search
        searchedCountry={searchedCountry}
        filteredCountry={filteredCountry}
      />
      <List countryArr={countryArr} />
    </>
  );
};
