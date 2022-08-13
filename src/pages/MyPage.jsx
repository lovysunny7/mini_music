import styled from 'styled-components';
import MusicCard from '../components/MusicCard';
import { StArtist, StTitle, StContent } from '../components/MusicCard';

const MyPage = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <StWrap>
        {/* 내 포스팅 */}
        <StSection>My Posting ✨</StSection>
        <div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-4 g-4'>
          {/* <MusicCard /> */}
          {/* 카드 하나 */}
          <div className='col'>
            <div className='card'>
              <img
                src='https://w.namu.la/s/db95e8529db90e3ad7c75b6d7ea8506b7a4a6f0d547810cc6ab1aa8c7f063f848a56c4f93636c7fa53e81f5fe00a3374df82f3d4b38372669e466cad41c3ea9f6d8599a7e1cc92e480151edd39e8d11f9fe8f557a20aca3229ccf1ece31b874b'
                className='card-img-top'
                alt='앨범 이미지 설명글'
              />
              <div className='card-body'>
                <p className='card-text'>ㅇㅇㅇ님의 Pick!</p>
                {/* <StTop> */}
                <StTitle>ddd</StTitle>
                <StArtist>sss</StArtist>
                {/* </StTop> */}
                <StContent className='card-text'>fff</StContent>
              </div>
            </div>
          </div>
        </div>

        {/* 내 댓글 */}
        <StSection>My Comments 🐱‍🚀</StSection>

        {/* 내 좋아요 */}
        <StSection>My Likes 💖</StSection>
      </StWrap>
    </>
  );
};

const StWrap = styled.div`
  /* border: 1px solid rebeccapurple; */
  margin: 5% 15%;
`;

export const StSection = styled.p`
  font-size: 22px;
  /* border: 1px solid rebeccapurple; */
`;

export default MyPage;
