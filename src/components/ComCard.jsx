import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ComCard() {
    const [username, setUsername] =  useState('');
    const [likeCnt, setLikeCnt] = useState('');
    const [heart,setHeart] = useState(false);
    const handleHeart = () => {
      heart? setHeart(false): setHeart(true);
    };

    const Heart = () =>{
       return(
        heart?
        (<span style={{cursor:'pointer',color:'red' }} onClick={handleHeart} className="material-icons">favorite</span>)
        :
        (<span  style={{cursor:'pointer' }} onClick={handleHeart} className="material-icons">favorite_border</span>)
       )
    }
    
  return (
    <>
    <Card size='lg'>
      <Card.Header style={{textAlign:'right'}}>하트수: {likeCnt} <Heart/> </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{username} 댓 1</ListGroup.Item>
        <ListGroup.Item>댓 2</ListGroup.Item>
        <ListGroup.Item>댓 3</ListGroup.Item>
      </ListGroup>      
    </Card>
    <Card size='lg'>
        <InputGroup>
          
        </InputGroup>
    </Card>
    </>
  );
}

export default ComCard;