import React, { useEffect, useState } from "react";
import NoteCard from "./NoteCard";
import Title from "./Title";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import AddNoteCard from "./AddNoteCard";

const MyNotes = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/notes")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <>
      <Title title={"These are My Notes..."} />
      <AddNoteCard />
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
