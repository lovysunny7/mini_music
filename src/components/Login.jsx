import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

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
