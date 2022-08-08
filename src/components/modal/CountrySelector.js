import React, { useState, useMemo } from "react";
import Select from "react-select";

const CountrySelector = () => {
  //usestate ma null halyo bhaney k huuncha??
  const [country, setCountry] = useState(null);
  const options = [
    { value: "nepal", label: "Nepal" },
    { value: "india", label: "India" },
    { value: "china", label: "China" },
    { value: "korea", label: "Korea" },
  ];

  const changeHandler = (value) => {
    setCountry(value);
  };
  return (
    <div>
      <Select value={country} onChange={changeHandler} options={options} />
    </div>
  );
};

export default CountrySelector;
