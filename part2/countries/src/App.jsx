import React, { useEffect, useState } from "react";
import ExtraInfo from "./components/ExtraInfo";
import FilteredCountry from "./components/FilteredCountry";
import countryService from "./services/countryService";

"key => 7ee9a0d70b8d66e89716f6107bdd810b"

function App() {
  const api_key = import.meta.env.VITE_SOME_KEY
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showExtraInfo, setShowExtraInfo] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    countryService
      .getAll()
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleFilterChange = (event) => {
    const currentTerm = event.target.value.toLowerCase();
    setSearchTerm(currentTerm);
    console.log(event.target.value);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(currentTerm)
    );
    setFilteredCountries(filtered);
    setShowExtraInfo(filtered.length === 1);
  };

  const handleShowClick = (countryName) => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
      )
    );
    setShowExtraInfo(true);
  };

  const renderContent = () => {
    if (showExtraInfo) {
      return <ExtraInfo country={filteredCountries[0]} />;
    }

    if (filteredCountries.length > 10 && searchTerm) {
      return "Too many matches. specify another filter";
    }

    return (
      <ul>
        {filteredCountries.map((country, index) => (
          <li key={index}>
            {country.name.common}
            <button onClick={() => handleShowClick(country.name.common)}>
              show
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Countries</h1>
      <FilteredCountry onChange={handleFilterChange} />
      {renderContent()}
    </>
  );
}

export default App;
