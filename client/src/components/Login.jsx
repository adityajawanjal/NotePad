import React from "react";
import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <>
      <Center m={"8"}>
        <Container
          maxW={"60vw"}
          border={"2px solid red"}
          p={"8"}
          borderRadius={"3xl"}
          gap={5}
        >
          <Heading textAlign={"center"}>Login</Heading>
          <FormControl m={"5"}>
            <FormLabel>Email : </FormLabel>
            <Input type={"email"} placeholder={"Enter your Email"} />
          </FormControl>
          <FormControl m={"5"}>
            <FormLabel>Password : </FormLabel>
            <Input type={"password"} placeholder={"Enter your Password"} />
          </FormControl>
          <Button type="button" m={"5"} w={"full"} bgColor={"whatsapp.100"}>
            Login
          </Button>
        </Container>
      </Center>
    </>
  );
};

export default Login;
