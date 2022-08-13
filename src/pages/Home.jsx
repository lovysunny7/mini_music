import styled from 'styled-components';
import MusicCard from '../components/MusicCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3001/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <StWrap>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
          {posts.map((post) => (
            <MusicCard key={post.postId} post={post} />
          ))}
        </div>
      </StWrap>
      {/* <StPosting onClick={()=>{navigate('/postWrite')}}>➕</StPosting> */}
      <WriteFixedBtn />
    </>
  );
};

const StWrap = styled.div`
  margin: 5% 15%;
  display: flex;
`;

// const StPosting = styled.button`
//   position: fixed;
//   padding: 25px 25px;
//   bottom: 10%;
//   right: 5%;
//   z-index: 999;
//   border: none;
//   border-radius: 100%;
//   background-color: #564592;
//   color: #fff;
//   cursor: pointer;
// `;

export default Home;
