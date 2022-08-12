import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post.jsx";

const Router = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/post" element={<Post />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
