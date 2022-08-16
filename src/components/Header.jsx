import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { getCookie, deleteCookie } from '../shared/Cookie';
import apis from '../api/index';

function Header() {
  const [login, setLogin] = useState(false);
  const handleCloseLogin = () => setLogin(false);
  const handleShowLogin = () => setLogin(true);

  const [signup, setSignup] = useState(false);
  const handleCloseSignup = () => setSignup(false);
  const handleShowSignup = () => setSignup(true);

  const navigate = useNavigate();

  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    apis.logoutUser(); // 여기 뭐 넣어야됨??..
    deleteCookie('refreshToken');
    deleteCookie('accessToken');
    alert('로그아웃이 완료되었습니다');
    window.location.reload(true);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        style={{ backgroundColor: '#564592' }}
        variant='dark'
      >
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}
          >
            MUSIC 🌈 PICKY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link
                onClick={() => {
                  navigate('/');
                }}
              >
                All
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/ballad');
                }}
              >
                Ballad
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/dance');
                }}
              >
                Dance
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/hiphop');
                }}
              >
                Hiphop
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/rock');
                }}
              >
                Rock
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate('/etc');
                }}
              >
                etc
              </Nav.Link>
            </Nav>
            <Nav>
              {isLoggedIn ? (
                <>
                  {/* 로그인시 */}
                  <Nav.Link
                    onClick={() => {
                      navigate('/mypage');
                    }}
                  >
                    My Page
                  </Nav.Link>
                  <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
                </>
              ) : (
                <>
                  {/* 비로그인시 */}
                  <Nav.Link onClick={handleShowLogin}>Log In</Nav.Link>
                  <Nav.Link onClick={handleShowSignup}>Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login login={login} handleCloseLogin={handleCloseLogin} />
      <SignUp signup={signup} handleCloseSignup={handleCloseSignup} />
    </>
  );
}

export default Header;
