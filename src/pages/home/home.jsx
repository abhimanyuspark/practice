import React from "react";
// import { makeData } from "../../data/makeData";
// import { ProgressCircle } from "../../style/progressBars/ProgressBars";
import { PaddingContainer, P, Container } from "../../style/Export/Export";
import { useSelector } from "react-redux";
import { useTitle } from "../../hooks/useTitle";
import Sepreate from "../../components/seprate/sepreateFile";

const Home = () => {
  // const data = makeData(50);
  const { user } = useSelector((state) => state.auth);
  useTitle("Dashboard");

  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
      {/* <ProgressCircle $value={76}>76</ProgressCircle> */}
      <PaddingContainer>
        <Container>
          <P>{user.name}</P>
          <Sepreate />
        </Container>
      </PaddingContainer>
    </div>
  );
};

export default Home;
