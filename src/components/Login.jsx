import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '../shared/Cookie';

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

  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await apis.postLogin({
  //       userId: idRef.current.value,
  //       password: passwordRef.current.value,
  //     });

  //     const AccessToken = response.headers.authorization.split(' ')[1];

  //     setCookie('token', AccessToken);
  //     alert('로그인 되었습니다!');
  //     navigate('/');
  //   } catch (error) {
  //     alert('정보를 확인해주세요.');
  //   }
  // };

  const [users, setUsers] = useState(null);
  const fetchUser = async () => {
    const { data } = await axios.get('http://localhost:3001/users');
    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  console.log(users);

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  // function handleLogin({ userId, password }) {
  //   const user = users.find(
  //     (user) => user.userId === userId && user.password === password
  //   );
  //   if (user === undefined) throw new Error();
  //   return user;
  // }

  // const login = ({ userId, password }) =>
  //   setUser(handleLogin({ userId, password }));
  // const logout = () => setUser(null);

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
          <Button variant='primary' onClick={() => {}}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
