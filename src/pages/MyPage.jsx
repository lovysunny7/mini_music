import styled from 'styled-components';
import MusicCard from '../components/MusicCard';

const MyPage = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <StWrap>
        <StDiv>
          <p>My Posting 💖</p>
        </StDiv>
        <div className='row row-cols-1 row-cols-md-4 g-3'>
          <MusicCard />
          <MusicCard />
        </div>
      </StWrap>
    </>
  );
};

const StWrap = styled.div`
  /* border: 1px solid rebeccapurple; */
  margin: 50px 100px;
`;

const StDiv = styled.div`
  font-size: 22px;
`

export default MyPage;
