import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';

function Header() {
  const [login, setLogin] = useState(false);
  const handleCloseLogin = () => setLogin(false);
  const handleShowLogin = () => setLogin(true);

  const [signup, setSignup] = useState(false);
  const handleCloseSignup = () => setSignup(false);
  const handleShowSignup = () => setSignup(true);

  const navigate = useNavigate();
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
              {/* 비로그인시 */}
              <Nav.Link onClick={handleShowLogin}>Log In</Nav.Link>
              <Nav.Link onClick={handleShowSignup}>Sign Up</Nav.Link>
              {/* 로그인시 */}
              <Nav.Link
                onClick={() => {
                  navigate('/mypage');
                }}
              >
                My Page
              </Nav.Link>
              <Nav.Link onClick={() => {}}>Log Out</Nav.Link>
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
