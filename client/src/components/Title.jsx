import { Divider, Heading } from "@chakra-ui/react";
import React from "react";

const Title = ({title}) => {
  return (
    <>
      <Heading textAlign={"center"} m={"7"}>
        {title}
      </Heading>
      <Divider
        borderWidth={"3px"}
        textAlign={"center"}
        maxW={"97vw"}
        borderColor={"blackAlpha.900"}
        mb={"8"}
      />
    </>
  );
};

export default Title;
