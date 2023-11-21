import React, { useState, useMemo } from "react";
import { makeData } from "../../data/makeData";

const Accordians = () => {
  const data = useMemo(() => {
    return makeData(5);
  }, []);
  const [index, setIndex] = useState();

  const handletoggle = (i) => (index !== i ? setIndex(i) : setIndex(null));

  return (
    <div className="container">
      {data.map((d, i) => {
        return (
          <div
            key={i}
            className="box"
            onClick={() => {
              handletoggle(i);
            }}
          >
            <div className="flex s-b">
              <span>{d.name}</span>
              <span className="b">{index === i ? "-" : "+"}</span>
            </div>
            <div>{index === i ? d.status.name : null}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordians;
