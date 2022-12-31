import React from 'react';
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

const NoteCard = ({title,no,description}) => {
  return (
    <>
      <Container maxW={"container.xl"}>
        <Box p={"5"} borderRadius={"3xl"} >
          <Accordion allowToggle={true} >
            <AccordionItem>
              <AccordionButton bgColor={"blackAlpha.300"}>
                <Box
                  textAlign={"left"}
                  fontSize={"large"}
                  flex={1}
                  fontFamily={"cursive"}
                >
                  {no+1+". "+title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel textAlign={"justify"}>
                {description}
                <Divider m={"5"} border={"2px solid black"} />
                <HStack gap={3} justifyContent={"flex-end"}>
                  <Button size={"lg"} bgColor={"whatsapp.100"} type="button">
                    Edit
                  </Button>
                  <Button size={"lg"} bgColor={"whatsapp.100"} type="button">
                    Delete
                  </Button>
                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        </Container>
    </>
  )
}

export default NoteCard;
