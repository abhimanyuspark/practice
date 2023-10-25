import React, { useState } from "react";
import { makedata } from "../../data/makeData";

const Accordians = () => {
  const [data] = useState(makedata(5));
  const [index, setIndex] = useState();

  const handletoggle = (i) => (index !== i ? setIndex(i) : setIndex(null));

  return (
    <div className="container">
      {data.map((d, i) => {
        return (
          <div
            className="box"
            onClick={() => {
              handletoggle(i);
            }}
          >
            <div className="flex s-b">
              <span>{d.name}</span>
              <span className="b">{index === i ? "-" : "+"}</span>
            </div>
            <div>{index === i ? d.jobType : null}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordians;
