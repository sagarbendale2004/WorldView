import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetail = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountryDetail = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryDetail();
  }, [countryName]);

  if (!country) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        className="p-2 px-6 bg-gray-400 rounded-md mt-4 mx-12"
        onClick={handleBack}
      >
        Back
      </button>
      <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-4 my-8 mx-16">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full sm:w-1/3 h-auto object-cover"
        />
        <div className="w-full sm:w-2/3 p-4">
          <h3 className="text-2xl font-semibold mb-2">{country.name.common}</h3>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Population:</span> {country.population}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Region:</span> {country.region}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">area:</span> {country.area}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">continents:</span> {country.continents}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Timezones:</span> {country.timezones}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">startOfWeek:</span>{" "}
            {country.startOfWeek}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Capital:</span>{" "}
            {country.capital ? country.capital[0] : "N/A"}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;
