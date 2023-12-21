import React, { useState } from "react";
const array = [
  { country: "India", city: "Delhi" },
  { country: "Pakistan", city: "Lahor" },
  { country: "US", city: "NewYork" },
];

const Sepreate = () => {
  const [state, setState] = useState(array[0]);

  return (
    <div>
      <select
        onChange={(e) => {
          setState(e.target.value);
        }}
      >
        {array.map((d, i) => {
          return (
            <option key={i} value={d.city}>
              {d.country}
            </option>
          );
        })}
      </select>

      <select value={state}>
        {array.map((d, i) => {
          return (
            <option key={i} value={d.city}>
              {d.city}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Sepreate;
