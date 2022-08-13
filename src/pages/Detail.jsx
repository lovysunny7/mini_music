import { useState, useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import ComCard from '../components/ComCard';
import StLayout from '../components/layout/Layout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const { data } = await axios.get(`http://localhost:3001/posts`);
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);

  return (
    <StLayout>
      {/* <Container>
        <ReactPlayer controls='true' width='100%' url={posts[id].videoUrl} />
      </Container>
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={12} md={8}>
                {posts[id].username}님의 Pick!
              </Col>
              <Col xs={6} md={4}>
                {new Date(posts[id].createdAt).toLocaleString()}
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>{posts[id].content}</Card.Body>
        </Card>
        <ComCard />
      </Container> */}
    </StLayout>
  );
}
