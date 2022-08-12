import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import MyPage from "./pages/MyPage.jsx";

const Router = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/mypage" element={<MyPage />}/>
        <Route exact path="/post" element={<Post />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
