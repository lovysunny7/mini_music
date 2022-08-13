import styled from 'styled-components';

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

const StLayout = styled.div`
  /* max-width: 1200px;
  min-width: 800px; */
  margin: 5% 15%;
`;

export default Layout;
