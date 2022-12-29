import React from "react";
import { Box, Heading, HStack, Input } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <HStack bgColor={"whatsapp.100"} h={"28"} justifyContent={"space-around"} position={"sticky"} top={"0.5"} >
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
        <HStack gap={3}>
          <Link to={"/"} >Home</Link>
          <Link to={"/myNotes"} >My Notes</Link>
          <Link to={"/profile"} >Aditya Jawanjal</Link>
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
