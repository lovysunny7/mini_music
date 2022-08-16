import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import apis from '../api/index';

const SignUp = ({ signup, handleCloseSignup }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
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
    handleCloseSignup(); // 실제 모달 닫는 함수
    setState({
      username: '',
      password: '',
      passwordConfirm: '',
    }); // 인풋 초기화
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const res = await apis.registerUser(state);
      console.log(res);
    } catch (error) {
      alert('회원가입 실패');
    }
  };
  return (
    <>
      <Modal show={signup} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>회원 가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* <Form.Group className='mb-3' controlId='userId'>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type='text'
                placeholder='영어로 시작하며 소문자와 숫자 조합으로 3-12 자리'
                autoFocus
                required
                name='userId'
                value={state.userId}
                onChange={handleChangeState}
              />
            </Form.Group> */}
            <Form.Group className='mb-3' controlId='username'>
              <Form.Label>사용자명</Form.Label>
              <Form.Control
                type='text'
                placeholder='영어로 시작하며 소문자와 숫자 조합으로 3-12 자리'
                autoFocus
                required
                name='username'
                value={state.username}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호 조건 어쩌구'
                autoFocus
                required
                name='password'
                value={state.password}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='passwordConfirm'>
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 동일하게 한 번 더 입력하세요.'
                autoFocus
                required
                name='passwordConfirm'
                value={state.passwordConfirm}
                onChange={handleChangeState}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
