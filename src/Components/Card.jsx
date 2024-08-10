import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  imageUrl,
  title,
  population,
  region,
  capital,
  countryName,
}) => {
  const navigate = useNavigate();

  const handleCountryClick = () => {
    navigate(`/country/${countryName}`);
  };

  return (
    <div
      className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-52 cursor-pointer"
      onClick={handleCountryClick}
    >
      <img className="w-full h-28 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">
          <span className="font-bold">Population:</span> {population}
        </p>
        <p className="text-gray-600 mt-1 text-sm">
          <span className="font-bold">Region:</span> {region}
        </p>
        <p className="text-gray-600 mt-1 text-sm">
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
