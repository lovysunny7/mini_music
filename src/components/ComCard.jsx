import { useEffect, useState, useRef } from 'react';
import { Button, Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import apis from '../api/axios';

const ComCard = ({ post }) => {
  const [likeCnt, setLikeCnt] = useState('');
  const [heart, setHeart] = useState(false);
  const comRef = useRef();
  const heartOn = { uid: 1 };
  const heartOff = { uid: 0 };
  const postId = post.postId;

  const numberHeart = () => {};

  const handleHeart = () => {
    // console.log(post.postId)
    if (heart) {
      setHeart(false);
      // console.log('하트를 눌렀을 때', heartOn, 서버기준)
      apis.post_heart2(postId, heartOn).then((res) => {
        // console.log(res.data.data.likeCnt)
        setLikeCnt(res.data.data.likeCnt);
      });
    } else {
      setHeart(true);
      // console.log('빈 하트를 눌렀을 때', heartOff, 서버기준)
      apis.post_heart2(postId, heartOff).then((res) => {
        // console.log(res.data.data.likeCnt)
        setLikeCnt(res.data.data.likeCnt);
      });
    }
  };

  const handleCom = (e) => {
    const comment = comRef.current.value;
    const commentJson = {
      comment,
    };
    apis.com_write2(postId, commentJson).then((res) => {
      // console.log(res);
      alert('댓글이 등록되었습니다');
    });
  };

  // heart compo
  const Heart = () => {
    useEffect(() => {
      // console.log(JSON.stringify(post))
    }, [heart, likeCnt]);

    return heart ? (
      <span
        style={{ cursor: 'pointer', color: 'red', marginLeft: '5px' }}
        onClick={handleHeart}
        className='material-icons'
      >
        favorite
      </span>
    ) : (
      <span
        style={{ cursor: 'pointer', marginLeft: '5px' }}
        onClick={handleHeart}
        className='material-icons'
      >
        favorite_border
      </span>
    );
  };

  // commentInput compo
  const CommentInput = () => {
    return (
      <InputGroup>
        <Form.Control id='comAdd' ref={comRef} />
        <Button aria-describedby='comAdd' onClick={handleCom}>
          Comment +
        </Button>
      </InputGroup>
    );
  };

  // console.log(post);
  return (
    <>
      <br />
      <Card size='lg'>
        <Card.Header style={{ display: 'flex', justifyContent: 'end' }}>
          {likeCnt ? likeCnt : post?.likeCnt} <Heart />
        </Card.Header>
        <ListGroup variant='flush'>
          {post?.commentList &&
            post?.commentList.map((cmt, idx) => (
              <ListGroup.Item key={idx}>{cmt}</ListGroup.Item>
            ))}
        </ListGroup>
      </Card>
      {/* <Card size='lg'> */}
      <br />
      <CommentInput />
      {/* </Card> */}
    </>
  );
};

export default ComCard;
