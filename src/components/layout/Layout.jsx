import styled from 'styled-components';

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

export const StLayout = styled.div`
  /* max-width: 1200px;
  min-width: 800px; */
  margin: 5% 15%;
  /* border: 1px solid red; */
`;

export const StDetailWrap = styled.div`
  max-width: 800px;
  margin: 0 auto;
  /* border: 1px solid rebeccapurple; */
`;

export default Layout;
