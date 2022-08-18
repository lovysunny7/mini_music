import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ViewModal from './ViewModal';

const PostCard = ({ post }) => {
  const shorts = (sentence) => {
    if (sentence.length > 18) {
      return sentence + '...';
    } else {
      return sentence;
    }
  };

  return (
    <>
      <div className='col'>
        <div className='card'>
          <img
            src={post.imageUrl}
            className='card-img-top'
            alt='앨범 이미지 설명글'
          />
          <div className='card-body'>
            <p className='card-text'>
              <StUsername>{post.user.username}</StUsername>
              <span>님의 Pick!</span>
            </p>
            <StTitle>{post.title}</StTitle>
            <StArtist>{post.artist}</StArtist>
            <StContent className='card-text'>
              {/* {shorts(post.content.slice(0, 19))} */}
              {post.content}
            </StContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;

export const StTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: -5px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const StArtist = styled.div`
  font-style: italic;
  color: #969696;
`;

export const StContent = styled.p`
  margin: 15px auto;
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
`;

export const StUsername = styled.span`
  /* color: #969696; */
  font-weight: 500;
`;
