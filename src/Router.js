import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Ballad from './pages/Ballad';
import Dance from './pages/Dance';
import MyPage from './pages/MyPage';
import PostUpdate from './pages/PostUpdate';
import PostView from './pages/PostView';
import PostWrite from './pages/PostWrite';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Home2 from './pages/Home2';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/' element={<Home2 />} />
        <Route path='/ballad' element={<Ballad />} />
        <Route path='/dance' element={<Dance />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route path='/posts/:id' element={<Detail />} />
        {/* <Route exact path='/postview' element={<PostView />} /> */}
        <Route exact path='/postwrite' element={<PostWrite />} />
        <Route exact path='/postupdate' element={<PostUpdate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
