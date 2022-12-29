import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Box, Stack } from "@chakra-ui/react";
import MyNotes from "./components/MyNotes";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Stack justifyContent={"space-between"} minH={"100vh"} >
        <Box  >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/myNotes" element={<MyNotes />} />
        </Routes>
        </Box>
        <Footer />
        </Stack>
      </BrowserRouter>
    </>
  );
};

export default App;
