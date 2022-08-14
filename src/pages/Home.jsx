import MusicCard from '../components/MusicCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3001/posts');
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  const navigate = useNavigate();

  return (
    <>
      <StLayout>
        {loading ? (
          <StLoading>Loading...🎈</StLoading>
        ) : (
          <>
            <StSecTitle>All Genre 🎂</StSecTitle>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
              {posts.map((post) => (
                <MusicCard
                  key={post.postId}
                  post={post}
                  onClick={() => {
                    navigate(`/posts/${post.postId}`);
                  }}
                />
              ))}
            </div>
          </>
        )}
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
