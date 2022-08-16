import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import { setCookie } from '../shared/Cookie';
import apis from '../api/index';

const Login = ({ login, handleCloseLogin }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChangeState = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
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

  const [cookies, setCookie] = useCookies('id');

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post('http://52.79.226.242/api/users/login', {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        setCookie('id', res.data.token);
      });
  };

  const onLogin = () => {
    // const data = {
    //   username,
    //   password,
    // };
    axios
      .post('http://52.79.226.242/api/users/login', state)
      .then((response) => {
        const { accessToken } = response.data;
        console.log(accessToken);
        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        // axios.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${accessToken}`;
        // axios.defaults.headers.common['Refresh-Token'] = `${accessToken}`;
        // axios.defaults.headers.common['Access-Token-Expire-Time'] = `???`;
        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((error) => {
        alert(error);
      });
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
                placeholder='아이디를 입력하세요.'
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
                placeholder='비밀번호를 입력하세요.'
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
          <Button variant='primary' onClick={onLogin}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
