import React from "react";
// import { makeData } from "../../data/makeData";
// import { ProgressCircle } from "../../style/progressBars/ProgressBars";
import { PaddingContainer, P, Container } from "../../style/Export/Export";
import { useSelector } from "react-redux";

const Home = () => {
  // const data = makeData(50);
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
      {/* <ProgressCircle $value={76}>76</ProgressCircle> */}
      <PaddingContainer>
        <Container>
          <P>{user.name}</P>
        </Container>
      </PaddingContainer>
    </div>
  );
};

export default Home;
