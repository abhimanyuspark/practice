import React, { useEffect, useState } from "react";
import {
  AbsoluteDiv,
  Container,
  FlexDiv,
  Icon,
  Image,
  P,
  Relative,
  RemoveButton,
} from "../../../style/Export/Export";
import { BlackBackground } from "../../../style/animations/animationStyles";
import { Add } from "../../../style/Icons/Icons";
import { Progress } from "antd";

const AvatarImage = ({ loading, image, circle, onClick, setImage }) => {
  const [progress, setProgress] = useState(0);
  const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   let interval;

  //   if (loading) {
  //     // Use setInterval to update the progress every second
  //     interval = setInterval(() => {
  //       setProgress((prevProgress) => prevProgress + 100 / 2); // Assuming 2 steps for 5 seconds
  //     }, 500);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //     setProgress(0);
  //   };
  // }, [loading]);

  return (
    <Relative>
      <Container
        $padding={image && "5px"}
        $line="dashed"
        $height="150px"
        $width="150px"
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div>
          {loading ? (
            <P style={{ margin: "42% 20%" }}>loading.....</P>
          ) : image ? (
            <Image loading="lazy" $circle={circle} src={image} alt={"avatar"} />
          ) : (
            <FlexDiv style={{ textAlign: "center" }} $direction>
              <Icon hover icon={Add} fontSize="22px" dir />
              <P $size="14px">Upload Random Image</P>
            </FlexDiv>
          )}
        </div>
        {hover && (
          <BlackBackground
            $position="absolute"
            $width="150px"
            $height="150px"
          />
        )}
        {hover && (
          <AbsoluteDiv $zIndex="6" $top="5px" $left="70px">
            <RemoveButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setImage("");
              }}
            >
              Remove
            </RemoveButton>
          </AbsoluteDiv>
        )}
      </Container>
    </Relative>
  );
};

export default AvatarImage;
