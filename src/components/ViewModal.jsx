import React, { useState } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import ComCard from './ComCard';

const ViewModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [heart, setHeart] = useState(false);

  /////////////////////////////////////////////
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [artisit, setArtisit] = useState('');
  const [genre, setGenre] = useState('');
  const [contents, setContents] = useState('');
  const [imageURL, setImage] = useState('');
  const [viedoURL, setVideo] = useState('');
  const [likeCnt, setLikeCnt] = useState('');
  const [commentList, setCommentList] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [modifiedAt, setModifiedAt] = useState('');

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        사진 클릭
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title} - {artisit} / {genre}{' '}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <ReactPlayer
              controls='true'
              width='100%'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
            />
          </Container>
          <Container>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={12} md={8}>
                    글작성자: {username}
                  </Col>
                  <Col xs={6} md={4}>
                    작성시간: {createdAt}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                감상평/추천이유:
                ######################################################################################################
                ##############################################################
                ##############################################################
                ##############################################################
                ##############################################################
              </Card.Body>
            </Card>
            <ComCard />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewModal;
