import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ViewModal from './ViewModal';

const PostCard = ({ post}) => {
  const shorts = (sentence) => {
    if (sentence.length > 18) {
      return sentence + '...';
    } else {
      return sentence;
    }
  };

  const navigate = useNavigate();

  const [postTmp, setPost] = useState({});
  const [postId, setPostId] = useState(0);
  const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  // const handleModal = (postId) =>{
  //   console.log(postId);
  //   handleShow();
  //   setPostId(postId);
  //   // return (
  //   //     <ViewModal show={show} handleShow={handleShow} handleClose={handleClose} post={post}/>
  //   // )
  // }


  return (
    <>
    <div className='col'>
    {/* <ViewModal show={show} handleShow={handleShow} handleClose={handleClose} postId={postId}/> */}
      <div
        className='card'
        // onClick={() => {
        //   navigate(`/posts/${post.postId}`);
        // }}
      >
        <img
          src={post.imageUrl}
          className='card-img-top'
          alt='앨범 이미지 설명글'
        />
        <div className='card-body'>
          <p className='card-text'>{post.user.username}님의 Pick!</p>
          {/* <StTop> */}
          <StTitle>{post.title}</StTitle>
          <StArtist>{post.artist}</StArtist>
          {/* </StTop> */}
          <StContent className='card-text'>
            {/* {shorts(post.content.slice(0, 19))} */}
            {post.content}
          </StContent>
        </div>
      </div>
    </div>
  `</>
  );
};

export default PostCard;
const StTop = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const StTitle = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const StArtist = styled.div`
  font-size: 16px;
  font-style: italic;
  /* margin-left: 10px; */
`;

export const StContent = styled.p`
  margin: 10px auto;
  /* border: 1px solid rebeccapurple; */
`;
