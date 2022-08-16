import PostCard from '../components/PostCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import ViewModal from '../components/ViewModal';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateIshidden } from '../redux/modules/postSlice';
import { useDispatch } from 'react-redux';
import { __getOnePost, __getAll } from '../redux/asyncThunk/asyncPost';
import axios from 'axios';
import apis from '../api/axios';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3001/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleModal = (post) => {
    // console.log(post);
    handleShow();
    setPost(post);
  };

  return (
    <>
      <StLayout>
        <StSecTitle>All Genre 🎂</StSecTitle>
        <ViewModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          post={post}
        />
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
          {posts.map((post) => (
            <div key={post.postId} onClick={() => handleModal(post.postId)}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </StLayout>
      <WriteFixedBtn />
    </>
  );
};

export const StLoading = styled.div`
  font-size: 36px;
  font-weight: 600;
  color: #564592;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid rebeccapurple; */
  height: 70vh;
`;

export default Home;
