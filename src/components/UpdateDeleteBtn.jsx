import { OverlayTrigger, Popover } from 'react-bootstrap';
import styled from 'styled-components';
import apis from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletPostId } from '../redux/modules/postSlice';

let navigate = null;
// width: '80px', height: '23px', lineHeight:'70%', textSizeAdjust:'inherit', fontSize:'13px'

export const StBtn = styled.button`
  width: 70px;
  height: 30px;
  line-height: 50%;
  // textSizeAdjust:inherit;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  &:hover {
    color: white;
    background-color: ${(props) => (props.del ? '#564592' : '#ca7df9')};
  }
  margin-bottom: ${(props) => (props.pop ? '15px' : '')};
  margin-left: ${(props) => (props.pop ? '45px' : '')};
`;

const onDelClick = (e) => {
  //   const navigate = useNavigate();
  //   const postId = useSelector(db=>db.deletPostId);
  const postId = e.target.value;
  apis.post_del2(postId);
  navigate('/mypage');
};

const onUpClick = (postId, userId) => {
  // console.log(postId, userId);
  // console.log(JSON.stringify(postId));
  navigate(`/postupdate/${userId}/${postId}`);
};

// overlTrigger 때문인지, styled component 선선언 필요
const StPopover = (postId) => {
  console.log(postId);
  return (
    <Popover id='popover-basic'>
      <Popover.Body>정말 삭제하시겠어요❓</Popover.Body>
      <StBtn del pop>
        네
      </StBtn>
    </Popover>
  );
};

export const UpdateDeleteBtn = ({ postId, userId }) => {
  // console.log(postId);
  // const dispatch = useDispatch();
  // dispatch(deletPostId(postId));
  navigate = useNavigate();

  return (
    <div style={{ textAlign: 'right', marginBottom: '15px' }}>
      <StBtn onClick={() => onUpClick(postId, userId)}>Edit</StBtn>{' '}
      <StBtn del value={postId} onClick={onDelClick}>
        Delete
      </StBtn>
    </div>
  );
};
