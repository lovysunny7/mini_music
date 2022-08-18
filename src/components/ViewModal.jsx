import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import ComCard from './ComCard';
import { useDispatch, useSelector } from 'react-redux';
import { __getOnePost } from '../redux/asyncThunk/asyncPost';
import { loadCommentAX, showIshidden, updateIshidden } from '../redux/modules/postSlice';
import { UpdateDeleteBtn } from './UpdateDeleteBtn';
import apis from '../api/axios';
import ErrorBoundary from './ErrorBoundary';
import { getCookie } from '../shared/Cookie';

const ViewModal = ({ show, handleShow, handleClose, postId}) => {
  const dispatch = useDispatch();
  const username = getCookie('username');
  const [post, setPost] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [heart, setHeart] = useState(false);
  const [changeState, setChangeState] = useState(false);

  // 다시 한 번 postId 별로 재검색
  const showOne = (postId) => {
    apis.post_view2(postId).then((res) => {
      // console.log('modal PostId', postId);
      console.log('modal postId 별 불러오기', res?.data.data);
      setPost(res?.data.data);
    });
  };

  // comments state
  const comments = useSelector((state)=>state.post.comments)

  useEffect(() => {
    showOne(postId);
    // if (username !== undefined) {
    //   return setIsLoggedIn(true);
    // }
    dispatch(loadCommentAX(postId))
  }, [show, changeState]);



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
            <ComCard post={post} changeState={changeState} setChangeState={setChangeState} comments={comments}/>
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