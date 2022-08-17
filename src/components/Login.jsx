import { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import apis from '../api/index';
import { setCookie } from '../shared/Cookie';

const Login = ({ login, handleCloseLogin }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChangeState = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = () => {
    handleCloseLogin(); // 실제 모달 닫는 함수
    setState({
      username: '',
      password: '',
    }); // 인풋 초기화
  };

  // const idRef = useRef();
  // const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();

    const res = await apis.loginUser(state, { withCredentials: true });
    try {
      const token = res.data.data.token;
      setCookie('accessToken', token.accessToken, token.accessTokenExpiresIn);
      setCookie('refreshToken', token.refreshToken, token.accessTokenExpiresIn);
      setCookie('userId', res.data.data.id, token.accessTokenExpiresIn);
      setCookie('username', res.data.data.username, token.accessTokenExpiresIn);
      alert('로그인 성공');
      window.location.reload(true);
    } catch (error) {
      alert(res.data.errorCode.message);
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={login} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>로그인</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='username'>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type='text'
                placeholder='아이디를 입력하세요'
                autoFocus
                name='username'
                value={state.username}
                onChange={handleChangeState}
                // ref={idRef}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 입력하세요'
                autoFocus
                name='password'
                value={state.password}
                onChange={handleChangeState}
                // ref={passwordRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleLogin}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
