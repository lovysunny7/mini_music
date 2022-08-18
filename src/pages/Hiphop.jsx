import PostCard from '../components/PostCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import { useEffect, useState } from 'react';
import ViewModal from '../components/ViewModal';
import apis from '../api/index';
import ErrorBoundary from '../components/ErrorBoundary';
import { getCookie } from '../shared/Cookie';

const Hiphop = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');

  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const showGenrePosts = (genre) => {
    apis
      .getGenrePosts(`${genre}`)
      .then((res) => {
        console.log(genre, res?.data.data);
        setPosts(res?.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    showGenrePosts('HIPHOP');
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleModal = (postId) => {
    handleShow();
    setPostId(postId);
  };

  return (
    <>
      <StLayout>
        <StSecTitle>H I P H O P 🕶</StSecTitle>
        <ErrorBoundary>
          <ViewModal
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            postId={postId}
          />
        </ErrorBoundary>
        {posts.length > 0 ? (
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
            {posts.map((post) => (
              <div key={post.postId} onClick={() => handleModal(post.postId)}>
                <PostCard
                  post={post}
                  show={show}
                  handleShow={handleShow}
                  handleClose={handleClose}
                />
              </div>
            ))}
          </div>
        ) : (
          <div>등록된 게시글이 없습니다.</div>
        )}
      </StLayout>
      {isLoggedIn ? <WriteFixedBtn /> : null}
    </>
  );
};

export default Hiphop;
