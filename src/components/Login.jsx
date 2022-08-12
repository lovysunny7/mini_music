import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Login = ({ login, handleCloseLogin }) => {
  const [state, setState] = useState({
    loginId: '',
    loginPw: '',
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
      loginId: '',
      loginPw: '',
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
            <Form.Group className='mb-3' controlId='loginId'>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type='id'
                placeholder='아이디를 입력하세요.'
                autoFocus
                name='loginId'
                value={state.loginId}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='loginPw'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 입력하세요.'
                autoFocus
                name='loginPw'
                value={state.loginPw}
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
