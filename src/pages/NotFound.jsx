import styled from 'styled-components';

const NotFound = () => {
  return (
    <StDiv>
      <StH2>404 😁 없는 페이지입니다 :)</StH2>
    </StDiv>
  );
};

const StDiv = styled.div`
  margin: 30px;
  height: 500px;
  border: 1px solid rebeccapurple;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;

const StH2 = styled.h2`
  display: flex;
  align-items: center;
`;

export default NotFound;
