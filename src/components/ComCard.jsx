import { useEffect, useState } from 'react';
import { Button, Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import apis from '../api/axios';

const ComCard = ({ post }) => {
  const [username, setUsername] = useState('');
  const [likeCnt, setLikeCnt] = useState('');
  const [heart, setHeart] = useState(false);
  const heartOn = { uid: 1 };
  const heartOff = { uid: 0 };
  
  
  
  const handleHeart = () => {
    if (heart){
      setHeart(false)
      apis.post_heart(post.postIId, heartOff).then((res)=>console.log(res))
    }else{
      setHeart(true)
      apis.post_heart(post.postId, heartOn).then((res)=>console.log(res))
    }
  };
  // heart ? setHeart(false) : setHeart(true);
  

  const Heart = () => {
   
    useEffect(() => {
      console.log(JSON.stringify(post))
      // statusHeart();
    
      }, [heart])
    

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

  // console.log(post);
  return (
    <>
      <br />
      <Card size='lg'>
        <Card.Header style={{ display: 'flex', justifyContent: 'end' }}>
          {post?.likeCnt} <Heart />
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
      <InputGroup>
        <Form.Control aria-describedby='comAdd' />
        <Button id='comAdd'>댓글등록</Button>
      </InputGroup>
      {/* </Card> */}
    </>
  );
};

export default ComCard;
