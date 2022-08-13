import React, { useState } from 'react';
import { useRef } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';

const PostWrite = () => {
  const [validated, setValidated] = useState(false);

  ///////////////////////////////////////////////
  const [username, setUsername] = useState('');
  // const [title, setTitle] =  useState('');
  // const [artisit, setArtisit] =  useState('');
  const [genre, setGenre] = useState('');
  // const [contents, setContents] = useState('');
  // const [imageURL, setImage] = useState('');
  // const [viedoURL, setVideo] = useState('');
  // const [likeCnt, setLikeCnt] = useState('');
  // const [commentList, setCommentList] = useState('');
  // const [createdAt, setCreatedAt] = useState('');
  // const [modifiedAt, setModifiedAt] = useState('');
  const [userData, setUserData] = useState();

  const titleRef = useRef();
  const artistRef = useRef();
  // const genre = useRef();
  const contentsRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const userFunc = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const onChangeGenre = (e) => {
    setGenre(e.target.value);
    userFunc(e);
  };

  const GenreRadio = () => {
    return (
      <Form.Group>
        {['Ballad', 'Dance', 'Hiphop', 'Rock', 'etc'].map((type) => (
          <Form.Check
            inline
            key={type}
            label={type}
            name='genre'
            type='radio'
            id={type}
            onChange={onChangeGenre}
            checked={`genre===${type}`}
          />
        ))}
      </Form.Group>
    );
  };

  return (
    <div style={{ textAlign: 'center', margin: '30px' }}>
      <Container style={{ margin: 'auto' }}>
        <h1>What's your Favorite Song?</h1>
        <br />
        <h3>{username}'s MUSIC PICK!</h3>
        <Form
          style={{ width: '80%', margin: 'auto' }}
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group style={{ margin: '30px' }}>
            <InputGroup hasValidation>
              <InputGroup.Text>음악제목</InputGroup.Text>
              <Form.Control type='text' required id='title' ref={titleRef} />
              <Form.Control.Feedback type='invalid'>
                음악제목을 적어주세요
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group style={{ margin: '30px' }}>
            <InputGroup hasValidation>
              <InputGroup.Text>가수</InputGroup.Text>
              <Form.Control type='text' required id='artist' ref={artistRef} />
              <Form.Control.Feedback type='invalid'>
                가수를 적어주세요
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <GenreRadio />

          <Form.Group style={{ margin: '30px' }}>
            <Form.Control
              type='text'
              required
              id='contents'
              ref={contentsRef}
              placeholder='추천이유와 감상평은 어떻게 되시나요?'
              style={{ height: '300px' }}
            />
            <Form.Control.Feedback type='invalid'>
              추천 이유를 적어주세요
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group style={{ margin: '30px' }}>
            <InputGroup hasValidation>
              <InputGroup.Text>이미지</InputGroup.Text>
              <Form.Control type='file' required id='imageUrl' ref={imageRef} />
              <Form.Control.Feedback type='invalid'>
                이미지 파일을 업로드 해주세요
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group style={{ margin: '30px' }}>
            <InputGroup hasValidation>
              <InputGroup.Text>Youtube URL</InputGroup.Text>
              <Form.Control type='url' required id='videoUrl' ref={videoRef} />
              <Form.Control.Feedback type='invalid'>
                Youtube URL을 입력해주세요
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button type='submit'>Submit form</Button>
        </Form>
      </Container>
    </div>
  );
};

export default PostWrite;
