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
import axios from "axios";
import { useState } from "react";

const Register = () => {
    const [data , setData] = useState({
      name:"",
      email:"",
      password:""
    });
    const handleChange = (e) =>{
        setData((pre)=>{
            return {...pre , [e.target.name]:e.target.value}
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/api/users",data);
    }

  return (
    <>
    <form action="post" onSubmit={handleSubmit}>
      <Center m={"8"}>
        <Container
          maxW={"60vw"}
          border={"2px solid red"}
          p={"8"}
          borderRadius={"3xl"}
          gap={5}
        >
          <Heading textAlign={"center"}>Register</Heading>
          <FormControl m={"5"}>
            <FormLabel>Name : </FormLabel>
            <Input type={"text"} name={"name"} placeholder={"Enter your Name"} onChange={handleChange} />
          </FormControl>
          <FormControl m={"5"}>
            <FormLabel>Email : </FormLabel>
            <Input type={"email"} name={"email"} placeholder={"Enter your Email"} onChange={handleChange} />
          </FormControl>
          <FormControl m={"5"}>
            <FormLabel>Password : </FormLabel>
            <Input type={"password"} name={"password"} placeholder={"Enter your Password"} onChange={handleChange} />
          </FormControl>
          <Button type={"submit"} m={"5"} w={"full"} bgColor={"whatsapp.100"} >
            Register
          </Button>
        </Container>
      </Center>
      </form>
    </>
  );
};

export default Register;
