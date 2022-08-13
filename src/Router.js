import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import PostUpdate from './pages/PostUpdate';
import PostView from './pages/PostView';
import PostWrite from './pages/PostWrite';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route path='/posts/:id' element={<Detail />} />
        <Route exact path='/postView' element={<PostView />} />
        <Route exact path='/postWrite' element={<PostWrite />} />
        <Route exact path='/postUpdate' element={<PostUpdate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
