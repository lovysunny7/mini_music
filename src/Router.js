import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Ballad from './pages/Ballad';
import Dance from './pages/Dance';
import Hiphop from './pages/Hiphop';
import Rock from './pages/Rock';
import Detail from './pages/Detail';
import MyPage from './pages/MyPage';
import PostUpdate from './pages/PostUpdate';
import PostWrite from './pages/PostWrite';
import Home2 from './pages/Home2';
import NotFound from './pages/NotFound';
import Etc from './pages/Etc';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route exact path='/' element={<Home2 />} />
        <Route path='/ballad' element={<Ballad />} />
        <Route path='/dance' element={<Dance />} />
        <Route path='/hiphop' element={<Hiphop />} />
        <Route path='/rock' element={<Rock />} />
        <Route path='/etc' element={<Etc />} />
        <Route exact path='/mypage' element={<MyPage />} />
        <Route path='/posts/:id' element={<Detail />} />
        <Route exact path='/postwrite' element={<PostWrite />} />
        <Route path='/postupdate/:userId/:postId' element={<PostUpdate />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
