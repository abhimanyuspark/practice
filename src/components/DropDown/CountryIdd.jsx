import React, { useState, useEffect } from "react";
import axios from "axios";
import DropDownListComponent from "../Custom/DropDownList/DropDownList";

const CountryIdd = ({ onItemSelected, value }) => {
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

  const templetItem = (d) => {
    const root = d.idd.root ? String(d.idd.root) : "+0";
    const suffixes = d.idd.suffixes ? String(d.idd.suffixes) : "";
    const combined = root + suffixes.slice(0, 2);
    return (
      <div className="flex gap-1">
        <img src={d.flags.svg} className="avatar" alt="images" />
        <span>{combined}</span>
      </div>
    );
  };

  const templeteValue = (d) => {
    const root = d.idd.root ? String(d.idd.root) : "+0";
    const suffixes = d.idd.suffixes ? String(d.idd.suffixes) : "";
    const combined = root + suffixes.slice(0, 2);
    return (
      <div className="flex gap-1" style={{ padding: "0px 10px" }}>
        <img src={d.flags.svg} className="avatar" alt="images" />
        <span>{combined}</span>
      </div>
    );
  };

  const fields = {
    text: (i) => {
      const root = i.idd.root ? String(i.idd.root) : "+0";
      const suffixes = i.idd.suffixes ? String(i.idd.suffixes) : "";
      const combined = root + suffixes.slice(0, 2);
      return combined;
    },
    sortText: (n) => n.name.common,
  };

  // console.log(defaultValue)
  //   const defaultValu = country[2];

  return (
    <div>
      {loading ? (
        // Render a loading indicator while data is being fetched
        <div>Loading...</div>
      ) : (
        <DropDownListComponent
          data={country}
          fields={fields}
          templetItem={templetItem}
          templeteValue={templeteValue}
          maxWidth={"150px"}
          sorting={true}
          search={true}
          value={value}
          // isMulti={true}
          onItemSelected={onItemSelected}
          enableNoDataRow={true}
        />
      )}
    </div>
  );
};

export default CountryIdd;
