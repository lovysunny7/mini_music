import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SignUp = ({ signup, handleCloseSignup }) => {
  const [state, setState] = useState({
    signupId: '',
    signupName: '',
    signupPw1: '',
    signupPw2: '',
  });

  const handleChangeState = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <Modal show={signup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>회원 가입</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='signupId'>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type='id'
                placeholder='아이디를 입력하세요.'
                autoFocus
                name='signupId'
                value={state.signupId}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='signupName'>
              <Form.Label>사용자명</Form.Label>
              <Form.Control
                type='name'
                placeholder='닉네임'
                autoFocus
                name='signupName'
                value={state.signupName}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='signupPw1'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호 조건 어쩌구'
                autoFocus
                name='signupPw1'
                value={state.signupPw1}
                onChange={handleChangeState}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='signupPw2'>
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 동일하게 한 번 더 입력하세요.'
                autoFocus
                name='signupPw2'
                value={state.signupPw2}
                onChange={handleChangeState}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseSignup}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
