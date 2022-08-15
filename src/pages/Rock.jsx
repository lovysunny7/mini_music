import MusicCard from '../components/MusicCard';
import WriteFixedBtn from '../components/WriteFixedBtn';
import StLayout from '../components/layout/Layout';
import { StSecTitle } from './MyPage';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Rock = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    let { data } = await axios.get('http://localhost:3001/posts');
    data = data.filter((post) => post.genre === 'Rock');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <>
      <StLayout>
        <StSecTitle>Rock 🥁</StSecTitle>
        {posts.length > 0 ? (
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
            {posts.map((post) => (
              <MusicCard key={post.postId} post={post} />
            ))}
          </div>
        ) : (
          <div>등록된 게시글이 없습니다.</div>
        )}
      </StLayout>
      <WriteFixedBtn />
    </>
  );
};

export default Rock;
