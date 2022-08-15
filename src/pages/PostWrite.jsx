import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Button, Card, Container, Form, InputGroup, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import apis from '../api/axios';
import { StDetailWrap } from '../components/layout/Layout';

const PostWrite = () => {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  ///////////////////////////////////////////////
  const [username, setUsername] = useState('이름없음');
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
  const genreRef = useRef();
  const contentRef = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  //파일 미리볼 url을 저장해줄 state - copy & paste
  const [fileImage, setFileImage] = useState("");

  // 파일 저장 - 로컬에서만 볼 수 있다
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
    imageRef.current.value="";    
    // console.log(imageRef.current.value);
  };

  const handleSubmit = (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }else{
      setUserData({
          id: titleRef.current.value+ new Date(),
          postId: titleRef.current.value,
          username: username,
          title: titleRef.current.value,
          artist: artistRef.current.value,
          genre: genreRef.current.value,
          content: contentRef.current.value,
          imageUrl: imageRef.current.value,
          videoUrl: videoRef.current.value,
          likeCnt:0,
          commetList:[],
          createAt: new Date().toUTCString(),
          modifiedAt: null
        })
        e.preventDefault();
    
      }
      setValidated(true);
    };
  
    // unused func
  const userFunc = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };

  const postWrite = (payload) => {
    apis.post_write(payload)
   }

  useEffect(() => {
    if(userData===undefined){
      console.log("값 노노")
    }else{
      console.log(userData)
      postWrite(userData);
      setTimeout(()=>{
        deleteFileImage();
        navigate('/mypage')
      },500)
    }
  }, [userData])

  const GenreRadio = () => {
    return (
      <Form.Group >
        {['Ballad', 'Dance', 'Hiphop', 'Rock', 'etc'].map((type) => (
          <Form.Check
            inline
            key={type}
            label={type}
            name='genre'
            id='genre'
            ref={genreRef}
            type='radio'
            value={type}
            onChange={onChangeGenre}
            checked={`genre===${type}`}
          />
        ))}
      </Form.Group>
    );
  };

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <StDetailWrap>
        <Container style={{ margin: "auto" }}>
          <h1>What's your Favorite Song?</h1>
          <br />
          <h3>{username}'s MUSIC PICK!</h3>
          <Form
            // style={{ width: '80%', margin: 'auto' }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group style={{ margin: "30px" }}>
              <InputGroup hasValidation>
                <InputGroup.Text>음악제목</InputGroup.Text>
                <Form.Control type="text" required id="title" ref={titleRef} />
                <Form.Control.Feedback type="invalid">
                  음악제목을 적어주세요
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group style={{ margin: "30px" }}>
              <InputGroup hasValidation>
                <InputGroup.Text>가수</InputGroup.Text>
                <Form.Control
                  type="text"
                  required
                  id="artist"
                  ref={artistRef}
                  // onChange={userFunc}
                />
                <Form.Control.Feedback type="invalid">
                  가수를 적어주세요
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <GenreRadio />

            <Form.Group style={{ margin: "30px" }}>
              <Form.Control
                type="text"
                required
                id="contents"
                // onChange={userFunc}
                ref={contentRef}
                placeholder="추천이유와 감상평은 어떻게 되시나요?"
                style={{ height: "300px" }}
              />
              <Form.Control.Feedback type="invalid">
                추천 이유를 적어주세요
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group style={{ margin: "30px" }}>
              <Card>
                {!fileImage && <p style={{paddingTop:"15px"}}>이미지 미리보기💾</p>}
                <Image
                //  alt="이미지 미리보기💾"
                 accept="image/*"
                 src={fileImage}
                 rounded={true}
               />
              </Card>
              <InputGroup hasValidation>
                <InputGroup.Text>이미지</InputGroup.Text>
                <Form.Control
                  type="file"
                  required
                  id="imageUrl"
                  name="file"
                  onChange={saveFileImage}
                  ref={imageRef}
                />
              <InputGroup.Text onClick={deleteFileImage}>삭제</InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  이미지 파일을 업로드 해주세요
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group style={{ margin: "30px" }}>
              <InputGroup hasValidation>
                <InputGroup.Text>Youtube URL</InputGroup.Text>
                <Form.Control
                  type="url"
                  required
                  id="videoUrl"
                  ref={videoRef}
                />
                <Form.Control.Feedback type="invalid">
                  Youtube URL을 입력해주세요
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button type="submit">작성하기</Button>
          </Form>
        </Container>
      </StDetailWrap>
    </div>
  );
};

export default PostWrite;
