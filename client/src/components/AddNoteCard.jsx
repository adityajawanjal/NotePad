import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const AddNoteCard = () => {
  const [data, setdata] = useState([]);

  const handleChange = (e) => {
    setdata((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/notes", data);
    window.location.reload();
  };

  return (
    <>
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
    </>
  );
};

export default AddNoteCard;
