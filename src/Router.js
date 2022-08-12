import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import MyPage from './pages/MyPage.jsx';
import Post from './pages/Post.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route exact path='/post' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
