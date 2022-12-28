import React from "react";
import { Box, Heading, HStack, Input } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <HStack bgColor={"whatsapp.100"} h={"28"} justifyContent={"space-around"}>
        <Box>
          <Heading>NotePad</Heading>
        </Box>
        <Box>
          <Input
            bgColor={"whiteAlpha.900"}
            type={"search"}
            border={"3px solid black"}
            placeholder={"Search Here..."}
            autoFocus={true}
          />
        </Box>
        <Box>
          <Link to={"/notes"} >My Notes</Link>
        </Box>
      </HStack>
    </>
  );
};

export default Navbar;
