import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Divider,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import Title from "./Title";

const MyNotes = () => {
  return (
    <>
      <Title title={"These are My Notes..."} />
      <Container>
      <Box p={"5"} borderRadius={"3xl"} maxW={"40vw"}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton bgColor={"blackAlpha.300"}>
              <Box textAlign={"left"} fontSize={"large"} flex={1} fontFamily={"cursive"} >
                Title 1
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              reiciendis nulla ex consequatur voluptatem placeat sunt, unde
              deleniti fugit consectetur fugiat autem eos iure, optio harum
              tenetur dolor. Ipsa, minima?
              <Divider m={"5"} border={"2px solid black"} />
              <HStack gap={3} justifyContent={"flex-end"}>
                <Button size={"lg"} bgColor={"whatsapp.100"} type="button">Edit</Button>
                <Button size={"lg"} bgColor={"whatsapp.100"} type="button">Delete</Button>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      </Container>
    </>
  );
};

export default MyNotes;
