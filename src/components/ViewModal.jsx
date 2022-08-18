import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import ComCard from './ComCard';
import { useDispatch, useSelector } from 'react-redux';
import { __getOnePost } from '../redux/asyncThunk/asyncPost';
import { showIshidden, updateIshidden } from '../redux/modules/postSlice';
import { UpdateDeleteBtn } from './UpdateDeleteBtn';
import apis from '../api/axios';
import ErrorBoundary from './ErrorBoundary';
import { getCookie } from '../shared/Cookie';

const ViewModal = ({ show, handleShow, handleClose, postId }) => {
  // const dispatch = useDispatch();
  const username = getCookie('username');
  const [post, setPost] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [heart, setHeart] = useState(false);

  const showOne = (postId) => {
    apis.post_view(postId).then((res) => {
      // console.log(postId);
      // console.log(res?.data.data);
      setPost(res?.data.data);
    });
  };

  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  // const show = useSelector(db=>db.ishiddenPost);
  // const handleShow = () => dispatch(updateIshidden(true))
  // const handleClose = () => dispatch(updateIshidden(false))

  // console.log(post);
  // console.log(user.username);

  useEffect(() => {
    showOne(postId);
    if (username !== undefined) {
      return setIsLoggedIn(true);
    }
  }, [show]);

  return (
    <>
      {/* <Button variant='primary' onClick={handleShow}>
        사진 클릭
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {post?.title} - {post?.artist} :: {post?.genre} ::
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {username === post?.user?.username && (
              <UpdateDeleteBtn
                postId={post?.postId}
                userId={post?.user?.userId}
              />
            )}
            <ReactPlayer
              controls={true}
              width={'100%'}
              url={post?.videoUrl}
              host={'https://www.youtube.com'}
            />
          </Container>
          <Container>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={12} md={12} lg={6}>
                    작성자: {post?.user?.username}
                  </Col>
                  <Col xs={12} md={12} lg={6}>
                    작성시각: {post?.user?.createdAt}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                {post?.user?.username}님의 한마디 🎹
                <br />
                {post?.content}
              </Card.Body>
            </Card>
            <ComCard post={post} />
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