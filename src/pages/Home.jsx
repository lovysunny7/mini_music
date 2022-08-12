// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MusicCard from '../components/MusicCard';
import { useNavigate } from 'react-router-dom';
import WriteFixedBtn from '../components/WriteFixedBtn';

const Home = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <StWrap>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </StWrap>
      {/* <StPosting onClick={()=>{navigate('/postWrite')}}>➕</StPosting> */}
      <WriteFixedBtn />
    </>
  );
};

const StWrap = styled.div`
  /* border: 1px solid rebeccapurple; */
  margin: 5% 15%;
  display: flex;
`;

const StPosting = styled.button`
  position: fixed;
  padding: 25px 25px;
  bottom: 10%;
  right: 5%;
  z-index: 999;
  border: none;
  border-radius: 100%;
  background-color: #564592;
  color: #fff;
  cursor: pointer;
`;

export default Home;
