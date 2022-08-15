import styled from 'styled-components';
import PostCard from '../components/PostCard';
import StLayout from '../components/layout/Layout';
import { StArtist, StTitle, StContent } from '../components/PostCard';

const MyPage = () => {
  // const dispatch = useDispatch();

  return (
    <StLayout>
      {/* 내 포스팅 */}
      <StSection>
        <StSecTitle>My Posting ✨</StSecTitle>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
          {/* <PostCard /> */}
          {/* 카드 하나 */}
          <div className='col'>
            <div className='card'>
              <img
                src='https://w.namu.la/s/db95e8529db90e3ad7c75b6d7ea8506b7a4a6f0d547810cc6ab1aa8c7f063f848a56c4f93636c7fa53e81f5fe00a3374df82f3d4b38372669e466cad41c3ea9f6d8599a7e1cc92e480151edd39e8d11f9fe8f557a20aca3229ccf1ece31b874b'
                className='card-img-top'
                alt='앨범 이미지 설명글'
              />
              <div className='card-body'>
                <p className='card-text'>cocobang님의 Pick!</p>
                {/* <StTop> */}
                <StTitle>epliogue</StTitle>
                <StArtist>IU</StArtist>
                {/* </StTop> */}
                <StContent className='card-text'>
                  퇴사할 즈음에 많이 들었어요
                </StContent>
              </div>
            </div>
          </div>
        </div>
      </StSection>

      {/* 내 댓글 */}
      <StSection>
        <StSecTitle>My Comments 🐱‍🚀</StSecTitle>
      </StSection>

      {/* 내 좋아요 */}
      <StSection>
        <StSecTitle>My Likes 💖</StSecTitle>
      </StSection>
    </StLayout>
  );
};

const StSection = styled.div`
  /* border: 1px solid rebeccapurple; */
  margin-bottom: 50px;
`;

export const StSecTitle = styled.p`
  font-size: 22px;
`;

export default MyPage;
