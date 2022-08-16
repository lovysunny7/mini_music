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

const ViewModal = ({ show, handleShow, handleClose, postId }) => {
  // const dispatch = useDispatch();
  const [post, setPost] = useState();
  const showOne = (postId) => {

    try{
      apis.post_view(postId).then((res)=>
      {
        // console.log(postId);
        // console.log(res?.data);
        setPost(res?.data.data);
      }
      )
    }catch(err){
      console.log('첫 실행시 나타나는 문제');
    }

   }


  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  // const show = useSelector(db=>db.ishiddenPost);
  // const handleShow = () => dispatch(updateIshidden(true))
  // const handleClose = () => dispatch(updateIshidden(false))

  // console.log(post);

  useEffect(() => {
    showOne(postId);
  }, [show]);
  /////////////////////////////////////////////
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [artisit, setArtisit] = useState('');
  const [genre, setGenre] = useState('');
  const [content, setContent] = useState('');
  const [imageURL, setImage] = useState('');
  const [viedoURL, setVideo] = useState('');
  const [likeCnt, setLikeCnt] = useState('');
  const [commentList, setCommentList] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [modifiedAt, setModifiedAt] = useState('');

  const [heart, setHeart] = useState(false);

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
            {post?.title} - {post?.artist} / {post?.genre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <UpdateDeleteBtn postId={post?.postId} />
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
                  <Col xs={12} md={8}>
                    작성자: {post?.user?.username}
                  </Col>
                  <Col xs={6} md={4}>
                    작성시간: {post?.user?.createdAt}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                감상평/추천이유
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
