import React, { useEffect, useState } from "react";
import {
  Container,
  FlexDiv,
  Icon,
  Image,
  P,
} from "../../../style/Export/Export";
import { Add } from "../../../style/Icons/Icons";
import { Progress } from "antd";

const AvatarImage = ({ loading, image, circle, onClick }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (loading) {
      // Use setInterval to update the progress every second
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 100 / 2); // Assuming 5 steps for 5 seconds
      }, 500);
    }

    return () => {
      clearInterval(interval);
      setProgress(0);
    };
  }, [loading]);

  return (
    <Container
      $padding={image && "5px"}
      $line="dashed"
      $height="150px"
      $width="150px"
      onClick={onClick}
    >
      {loading ? (
        <Progress
          percent={progress}
          strokeWidth={15}
          showInfo={false}
          style={{ margin: "50px 0px 0px 0px" }}
        />
      ) : image ? (
        <Image loading="lazy" $circle={circle} src={image} alt={"avatar"} />
      ) : (
        <FlexDiv style={{ textAlign: "center" }} $direction>
          <Icon hover icon={Add} fontSize="22px" dir />
          <P $size="14px">Upload Random Image</P>
        </FlexDiv>
      )}
    </Container>
  );
};

export default AvatarImage;
