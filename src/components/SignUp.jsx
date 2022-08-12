import { Button, Form, Modal } from 'react-bootstrap';

const SignUp = ({ signup, handleCloseSignup }) => {
  return (
    <>
      <Modal show={signup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                type='id'
                placeholder='4자 이상 숫자 어쩌구 조건'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>사용자명</Form.Label>
              <Form.Control
                type='name'
                placeholder='닉네임'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호 조건 어쩌구'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 동일하게 한 번 더 입력하세요.'
                autoFocus
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
