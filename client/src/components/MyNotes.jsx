import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import Title from "./Title";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";

const MyNotes = () => {
  const [data, setdata] = useState([]);

  const handleChange = (e) => {
    setdata((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/notes", data);
  };
  
  useEffect(()=>{
    axios.get("http://localhost:5000/api/notes").then((res)=>{setdata(res.data)}).catch((err)=>{console.log(err);})
  },[])
 console.log(data);
  return (
    <>
      <Title title={"These are My Notes..."} />
      <form action="post" onSubmit={handleSubmit}>
        <Stack m={"5"}>
          <FormControl maxW={"56"}>
            <FormLabel>Title : </FormLabel>
            <Input type={"text"} name={"title"} onChange={handleChange} />
          </FormControl>
          <FormControl maxW={"96"}>
            <FormLabel>Description : </FormLabel>
            <Textarea name={"description"} onChange={handleChange} />
          </FormControl>
          <Button type="submit" size={"lg"} maxW={"32"}>
            Add Note
          </Button>
        </Stack>
      </form>
      <Box>
        {data.map((e, i) => {
        return (
          <React.Fragment key={e._id}>
            <NoteCard title={e.title} no={i} description={e.description} />
          </React.Fragment>
        );
      })}
      </Box>
    </>
  );
};

export default MyNotes;
