// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MusicCard from '../components/MusicCard';

const Home = () => {
  // const dispatch = useDispatch();

  return (
    <>
      <StWrap>
        <div class='row row-cols-1 row-cols-md-4 g-3'>
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
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

export default Home;
