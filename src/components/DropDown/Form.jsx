import React, { useState } from "react";
// import './templates.css';
import Country from "./Country";
import Employee from "./Employee";
import CountryIdd from "./CountryIdd";

const Form = () => {
  const [person, setPerson] = useState({
    name: "Abhimanyu",
    profile: "Image",
    employee: [],
    country: {},
    countryNumber: {},
  });
  // console.log(person)

  const [loading, setLoading] = useState(false);
  const timeout = 3000;
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("loading in process");
    setTimeout(() => {
      console.log(person);
      console.log("Console after 2 sec, loading is complete");
      setLoading(false);
    }, timeout);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-1">
        <Employee
          value={person.employee}
          // defaultValue={person.employee}
          onItemSelected={(e) => {
            setPerson((prevPerson) => ({
              ...prevPerson,
              employee: e,
            }));
          }}
        />
        <Country
          value={person.country}
          onItemSelected={(c) => {
            setPerson((prevPerson) => ({
              ...prevPerson,
              country: c,
            }));
          }}
        />
        <CountryIdd
          value={person.country}
          onItemSelected={(c) => {
            setPerson((prevPerson) => ({
              ...prevPerson,
              countryNumber: c,
            }));
          }}
        />
      </div>
      <button
        style={loading ? { cursor: "not-allowed" } : { cursor: "pointer" }}
      >
        {loading ? "Loading..." : "submit"}
      </button>
    </form>
  );
};

export default Form;
