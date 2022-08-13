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
      <WriteFixedBtn />
    </>
  );
};

const StWrap = styled.div`
  margin: 5% 15%;
  display: flex;
`;

export default Home;
