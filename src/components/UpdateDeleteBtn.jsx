import {  OverlayTrigger, Popover } from "react-bootstrap";
import styled from "styled-components";
import apis from "../api/axios";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { deletPostId } from "../redux/modules/postSlice";

let navigate = null;
// width: '80px', height: '23px', lineHeight:'70%', textSizeAdjust:'inherit', fontSize:'13px'
export const StBtn = styled.button`
  width: 80px;
  height: 23px;
  line-height: 50%;
  // textSizeAdjust:inherit;
  font-size: 13px;
  border-radius: 5px;
  border: none;
  &:hover {
    color: white;
    background-color: ${(props) => (props.del ? "#564592" : "#ca7df9")};
  }
  margin-bottom: ${(props) => (props.pop ? "15px" : "")};
  margin-left: ${(props) => (props.pop ? "45px" : "")};
`;
const OnDelClick = () => {
//   const navigate = useNavigate();
  // apis.post_del(postId);
  const postId = useSelector(db=>db.deletPostId);
  console.log(postId);
//    navigate('/mypage')
  return <Navigate to='/mypage' />

};

// overlTrigger 때문인지 몰라서, styled component 선선언 필요
const popover =  (

  <Popover id="popover-basic">
    <Popover.Body>정말 삭제하시겠어요 ❓</Popover.Body>
    <StBtn del pop onClick={(postId)=>OnDelClick}>
      네
    </StBtn>
  </Popover>
  )
  ;
  
  
  export const UpdateDeleteBtn = (postId) => {
      //   console.log(postId);
    // const dispatch = useDispatch();
    // dispatch(deletPostId(postId));
    navigate = useNavigate();

  return (
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <StBtn>수정하기</StBtn>{" "}
      <OverlayTrigger postId={postId} trigger="click" placement="bottom" overlay={popover}>
        <StBtn del>삭제하기</StBtn>
      </OverlayTrigger>
    </div>
  );
};
