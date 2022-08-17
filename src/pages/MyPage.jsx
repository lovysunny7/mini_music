import styled from 'styled-components';
import MyCard from '../components/MyCard';
import StLayout from '../components/layout/Layout';
import WriteFixedBtn from '../components/WriteFixedBtn';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ViewModal from '../components/ViewModal';
import apis from '../api/index';
import ErrorBoundary from '../components/ErrorBoundary';
import { getCookie } from '../shared/Cookie';
import { Card, Col, Container, Modal, Row } from 'react-bootstrap';
import NotFound from './NotFound';

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [postId, setPostId] = useState('');

  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  const showMine = () => {
    apis.getMypage().then((res) => {
      console.log(res?.data.data);
      setPosts(res?.data.data.PostList);
      setComments(res?.data.data.CommentList);
      setLikes(res?.data.data.LikedPostList);
      console.log(res?.data.data.CommentList);
    });
    console.log('posts', posts);
    console.log('comments', comments);
    console.log('mylikes', likes);
  };

  useEffect(() => {
    showMine();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleModal = (postId) => {
    handleShow();
    setPostId(postId);
  };

  return (
    <>
      {isLoggedIn ? (
        <StLayout>
          {/* 내 포스팅 */}
          <StSection>
            <StSecTitle>My Posting ✨</StSecTitle>
            <ErrorBoundary>
              <ViewModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                postId={postId}
              />
            </ErrorBoundary>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
              {posts.map((post) => (
                <div key={post.postId} onClick={() => handleModal(post.postId)}>
                  <MyCard
                    post={post}
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                </div>
              ))}
            </div>
          </StSection>

          {/* 내 댓글 */}
          <StSection>
            <StSecTitle>My Comments 🐱‍🚀</StSecTitle>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
              {comments.map((comment) => (
                <StCom key={comment.commentId}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col>{comment.comment}</Col>
                      </Row>
                      <Row>
                        <Col>{comment.createdAt}</Col>
                      </Row>
                      {/* <Row>{comment.createdAt}</Row> */}
                    </Card.Body>
                  </Card>
                </StCom>
              ))}
            </div>
          </StSection>

          {/* 내가 좋아한 포스팅들 */}
          <StSection>
            <StSecTitle>My Likes 💖</StSecTitle>
            <ErrorBoundary>
              <ViewModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                postId={postId}
              />
            </ErrorBoundary>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4'>
              {likes.map((post) => (
                <div key={post.postId} onClick={() => handleModal(post.postId)}>
                  <MyCard
                    post={post}
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                </div>
              ))}
            </div>
          </StSection>
          <WriteFixedBtn />
        </StLayout>
      ) : (
        <NotFound />
      )}
    </>
  );
};

const StSection = styled.div`
  /* border: 1px solid rebeccapurple; */
  margin-bottom: 50px;
`;

export const StSecTitle = styled.p`
  font-size: 22px;
`;

const StCom = styled.div`
  /* width: 300px; */
  /* border: 1px solid red; */
`;

export default MyPage;
