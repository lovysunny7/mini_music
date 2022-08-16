import axios from 'axios';
import { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apis from '../api/index';
import { getCookie, setCookie } from '../shared/Cookie';

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    // const res = axios.post(
    //   'http://52.78.235.109/api/users/login',
    //   {
    //     username: state.username,
    //     password: state.password,
    //   },
    //   { withCredentials: true }
    // );
    // console.log(await res);
    try {
      const res = await apis.loginUser(state, { withCredentials: true });
      const token = res.data.data.token;
      console.log(res);
      setCookie('accessToken', token.accessToken, token.accessTokenExpiresIn);
      setCookie('refreshToken', token.refreshToken, token.accessTokenExpiresIn);
      setCookie('userId', res.data.data.id);
      setCookie('username', res.data.data.username)
      alert('로그인 성공');
      window.location.reload(true);
    } catch (error) {
      alert('아이디와 비밀번호를 확인해주세요');
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
                ref={idRef}
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
                ref={passwordRef}
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
