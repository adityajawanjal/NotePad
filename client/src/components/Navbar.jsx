import React from 'react';
import { Box, Heading, HStack, Input } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <>
      <HStack bgColor={"whatsapp.100"} h={"24"} justifyContent={"space-around"}  >
        
        <Box>
            <Heading>NotePad</Heading>
        </Box>
        <Box>
            <Input bgColor={"whiteAlpha.900"} type={"search"} border={"3px solid black"} placeholder={"Search Here..."} autoFocus={true} />
        </Box>
        <Box>My Notes</Box>
     
      </HStack>
    </>
  )
}

export default Navbar;
