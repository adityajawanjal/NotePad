import React from "react";
import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/login");
  };
  const onRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Center
        minH={"90vh"}
        w={"full"}
        bgImage={
          "url('https://thumbs.dreamstime.com/z/blank-notepad-white-background-176617328.jpg')"
        }
        bgRepeat={"no-repeat"}
        objectFit={"cover"}
        bgSize={"cover"}
      >
        <VStack gap={5} position={"relative"} top={{ base: "5", "2xl": "32" }}>
          <Heading textAlign={"center"} mb={"10"}>
            Notepad
          </Heading>
          <Text maxW={"container.md"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed ut
            adipisci est repudiandae consequuntur distinctio quaerat tenetur
            consectetur labore!
          </Text>
          <Center minW={"container.sm"}>
            <Button
              type="button"
              bgColor={"whatsapp.100"}
              mr={"10"}
              onClick={() => onLogin()}
            >
              Log In
            </Button>
            <Button
              type="button"
              bgColor={"whatsapp.100"}
              onClick={() => onRegister()}
            >
              Register
            </Button>
          </Center>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
