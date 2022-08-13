import styled from 'styled-components';

const MusicCard = ({ post }) => {
  return (
    <div className='col'>
      <div className='card'>
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
          <StContent className='card-text'>{post.content}</StContent>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
const StTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StTitle = styled.div`
  font-size: 22px;
`;

const StArtist = styled.div`
  font-size: 16px;
  font-style: italic;
  margin-right: 10px;
`;

const StContent = styled.p`
  margin: 10px auto;
  /* border: 1px solid rebeccapurple; */
`;
