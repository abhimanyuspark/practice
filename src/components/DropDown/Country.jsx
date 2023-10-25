import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDownListComponent from "./DropDownList";

const Country = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  const apiUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(apiUrl);
        setCountry(res.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching country data: ", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchCountry();
  }, []);

  const item = (d) => {
    return (
      <div className="flex gap-1">
        <img src={d.flags.svg} className="avatar" alt="images" />
        <span>{d.name.common}</span>
      </div>
    );
  };

  const value = (d) => {
    return (
      <div className="flex gap-1" style={{padding:"0px 10px"}}>
        <img src={d.flags.svg} className="avatar" alt="images" />
        <span>{d.name.common}</span>
      </div>
    );
  };

  const fields = { text: (i) => i.name.common };

  return (
    <div>
      {loading ? (
        // Render a loading indicator while data is being fetched
        <div>Loading...</div>
      ) : (
        // <DropDownListComponent
        //   data={country}
        //   fields={fields}
        //   templetItem={item}
        //   templeteValue={value}
        //   maxWidth={"300px"}
        //   sorting={true}
        //   search={true}
        //   // isMulti={true}
        //   enableNoDataRow={true}
        // />
        ""
      )}
    </div>
  );
};

export default Country;
