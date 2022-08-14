import { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import ComCard from '../components/ComCard';
import { StLayout, StDetailWrap } from '../components/layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts`);
    // console.log(data[id - 1]);
    setPost(data[id - 1]);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(post);

  return (
    <StLayout>
      <StDetailWrap>
        <Container>
          <ReactPlayer controls='true' width='100%' url={post.videoUrl} />
        </Container>
        <br />
        <Container>
          <Card>
            <Card.Body>
              <Row>
                <Col
                  xs={12}
                  md={8}
                  // style={{ border: '1px solid red'}}
                >
                  {post.username}님의 Pick!
                </Col>
                <Col
                  xs={6}
                  md={4}
                  style={{
                    // border: '1px solid red',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  {new Date(post.createdAt).toLocaleString()}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>{post.content}</Card.Body>
          </Card>
          {/* <ComCard post={post} /> */}
        </Container>
      </StDetailWrap>
    </StLayout>
  );
}
