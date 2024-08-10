import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ onSearch, onFilter }) => {
  const [search, setSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value, selectedRegion);
  };

  const handleRegionChange = (e) => {
    const value = e.target.value;
    setSelectedRegion(value);
    onFilter(value, search);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mt-6 px-4 md:px-8 mx-8">
      <div className="relative w-full md:w-1/2 lg:w-1/3">
        <IoSearchSharp className="absolute top-3 left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={handleSearchChange}
          className="pl-10 p-2 border border-gray-300 rounded-md focus:outline-none w-full text-gray-800"
        />
      </div>

      <select
        className="p-2 border border-gray-300 rounded-md focus:outline-none text-gray-800 w-full md:w-1/2 lg:w-1/3"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        <option value="">Filter Regions</option>
        <option value="americas">Americas</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="antarctic">Antarctic</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchBar;
