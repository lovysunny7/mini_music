import { Button, Form, Modal } from 'react-bootstrap';

const Login = ({ login, handleCloseLogin }) => {
  return (
    <>
      <Modal show={login} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type='id'
                placeholder='아이디를 입력하세요.'
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='비밀번호를 입력하세요.'
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseLogin}>
            Close
          </Button>
          <Button variant='primary' onClick={handleCloseLogin}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
