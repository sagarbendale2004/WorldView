import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import CountryDetail from "../Components/CountryDetail";

function RestCountries() {
  const [countryData, setCountryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
      setFilteredData(data);
      console.log("Fetched data:", data); // Debugging line
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchText, region) => {
    filterData(searchText, region);
  };

  const handleFilter = (region, searchText) => {
    filterData(searchText, region);
  };

  const filterData = (searchText, region) => {
    let filtered = countryData;

    if (searchText) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );
    }

    setFilteredData(filtered);
  };

  const handleCountryClick = (country) => {
    console.log("Country clicked:", country); // Debugging line
    setSelectedCountry(country);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="p-8 flex flex-wrap justify-center gap-16 mx-4">
        {filteredData.map((country) => (
          <Card
            key={country.cca3}
            imageUrl={country.flags.svg}
            title={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital[0] : "N/A"}
            countryName={country.name.common}
          />
        ))}
      </div>
      {selectedCountry && (
        <div className="flex justify-center items-center h-screen p-4">
          <CountryDetail
            imageUrl={selectedCountry.flags.svg}
            title={selectedCountry.name.common}
            population={selectedCountry.population}
            region={selectedCountry.region}
            capital={selectedCountry.capital?.[0]}
          />
        </div>
      )}
    </div>
  );
}

export default RestCountries;
