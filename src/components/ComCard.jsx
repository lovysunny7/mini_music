import { useEffect, useState, useRef } from 'react';
import { Button, Card, Form, InputGroup, ListGroup } from 'react-bootstrap';
import apis from '../api/axios';

const ComCard = ({ post }) => {
  const [likeCnt, setLikeCnt] = useState('');
  const [heart, setHeart] = useState(false);
  const comRef = useRef();
  const heartOn = { uid: 1 };
  const heartOff = { uid: 0 };
  
  
 const numberHert = () => {



 }
  
  const handleHeart = () => {
    // console.log(post.postId)
    const postId = post.postId;
    if (heart){
      setHeart(false)
      console.log('하트를 눌렀을 때', heartOn)
      apis.post_heart2(postId, heartOn).then((res)=>console.log(res))
    }else{
      setHeart(true)
      console.log('빈 하트를 눌렀을 때', heartOff)
      apis.post_heart2(postId, heartOff).then((res)=>console.log(res))
    }
  };
  // heart ? setHeart(false) : setHeart(true);
  

const handleCom = (e) =>{
  console.log(comRef.current.value);
}



  // heart compo
  const Heart = () => {
   
    useEffect(() => {
      // console.log(JSON.stringify(post))
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

  // commentInput compo
  const CommentInput = () =>{


    return (
      <InputGroup>
      <Form.Control id='comAdd' ref={comRef} />
      <Button aria-describedby='comAdd' onClick={handleCom}>댓글등록</Button>
    </InputGroup>
    );
  }



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
      <CommentInput/>
      {/* </Card> */}
    </>
  );
};

export default ComCard;
