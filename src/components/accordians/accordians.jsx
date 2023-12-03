import React, { useState, useMemo } from "react";
import { makeData } from "../../data/makeData";
import {
  FlexDiv,
  Icon,
  JustifyWrapper,
  PaddingContainer,
} from "../../style/Export/Export";

const Accordians = () => {
  const data = useMemo(() => {
    return makeData(5);
  }, []);
  const [index, setIndex] = useState();

  const handletoggle = (i) => (index !== i ? setIndex(i) : setIndex(null));

  return (
    <PaddingContainer>
      <FlexDiv $direction>
        {data.map((d, i) => {
          return (
            <div
              key={i}
              className="box"
              onClick={() => {
                handletoggle(i);
              }}
            >
              <JustifyWrapper>
                <span>{d.name}</span>
                <Icon fontSize="25px" icon={index === i ? "-" : "+"} />
              </JustifyWrapper>
              <div>{index === i ? d.status.name : null}</div>
            </div>
          );
        })}
      </FlexDiv>
    </PaddingContainer>
  );
};

export default Accordians;
