import PostCard from '../components/PostCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateIshidden } from '../redux/modules/postSlice';
import { useDispatch } from 'react-redux';
import ViewModal from '../components/ViewModal';
import { __getOnePost, __getAll } from '../redux/asyncThunk/asyncPost';
import apis from '../api/axios';

const Home2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState('');

  // const fetchPosts = async () => {
  //   const { data } = await axios.get('http://localhost:3001/posts');
  //   setPosts(data);
  // };
  const showAll = () => {
    apis.post_all().then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  // const payload = dispatch(__getAll()).then((res)=>{return res});

  const payload2 = async () => {
    const { data } = await dispatch(__getAll());
    console.log(data);
  };

  useEffect(() => {
    showAll();
    // payload2();
    // setPosts(dispatch(__getAll()));
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
    // return (
    //     <ViewModal show={show} handleShow={handleShow} handleClose={handleClose} post={post}/>
    // )
  };

  const onClickPost = (post) => {
    // dispatch(__getOnePost(post));
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
            // <div onClick={()=>navigate(`/posts/${post.postId}`)}>
            // <div onClick={()=>navigate(`/postview/${post.postId}`)}>
            <div key={post.postId} onClick={() => handleModal(post)}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </StLayout>
      <WriteFixedBtn />
    </>
  );
};

export default Home2;
