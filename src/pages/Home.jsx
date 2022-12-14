import PostCard from '../components/PostCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewModal from '../components/ViewModal';
import apis from '../api/axios';
import ErrorBoundary from '../components/ErrorBoundary';
import { getCookie } from '../shared/Cookie';

const Home = () => {
  const [posts, setPosts] = useState([]);
  // const [post, setPost] = useState({});
  const [postId, setPostId] = useState('');

  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  const showAll = () => {
    apis.post_all().then((res) => {
      // console.log('All Posts',res?.data.data)
      setPosts(res?.data.data);
    });
  };

  useEffect(() => {
    showAll();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleModal = (postId) => {
    // console.log('Viewmodal핸들', postId);
    handleShow();
    setPostId(postId);
  };

  return (
    <>
      <StLayout>
        <StSecTitle>All Genre 🎂</StSecTitle>
        <ErrorBoundary>
          <ViewModal
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            postId={postId}
          />
        </ErrorBoundary>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
          {posts.map((post) => (
            <div key={post.postId} onClick={() => handleModal(post.postId)}>
              <PostCard post={post} show={show} handleClose={handleClose} />
            </div>
          ))}
        </div>
      </StLayout>
      {isLoggedIn ? <WriteFixedBtn /> : null}
    </>
  );
};

export default Home;
