import React from "react";
// import { makeData } from "../../data/makeData";
// import { ProgressCircle } from "../../style/progressBars/ProgressBars";
import UseList from "../UserList/UseList";

const Home = () => {
  // const data = makeData(50);

  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
      {/* <ProgressCircle $value={76}>76</ProgressCircle> */}
      <UseList />
    </div>
  );
};

export default Home;
