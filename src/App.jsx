import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestCountries from "./Components/RestCountries";
import CountryDetail from "./Components/CountryDetail";
import Header from "./Components/Header";
import { ThemeProvider } from "./store/context";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RestCountries />} />
          <Route path="/country/:countryName" element={<CountryDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
