import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MusicCard = ({ post }) => {
  const shorts = (sentence) => {
    if (sentence.length > 18) {
      return sentence + '...';
    } else {
      return sentence;
    }
  };

  const navigate = useNavigate();

  return (
    <div className='col'>
      <div
        className='card'
        // onClick={() => {
        //   navigate(`/posts/${post.postId}`);
        // }}
      >
        <img
          src={post.imageUrl}
          className='card-img-top'
          alt='앨범 이미지 설명글'
        />
        <div className='card-body'>
          <p className='card-text'>{post.username}님의 Pick!</p>
          {/* <StTop> */}
          <StTitle>{post.title}</StTitle>
          <StArtist>{post.artist}</StArtist>
          {/* </StTop> */}
          <StContent className='card-text'>
            {/* {shorts(post.content.slice(0, 19))} */}
            {post.content}
          </StContent>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
const StTop = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const StTitle = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const StArtist = styled.div`
  font-size: 16px;
  font-style: italic;
  /* margin-left: 10px; */
`;

export const StContent = styled.p`
  margin: 10px auto;
  /* border: 1px solid rebeccapurple; */
`;
