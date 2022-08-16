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
const onDelClick = (e, postId) => {
//   const navigate = useNavigate();
//   const postId = useSelector(db=>db.deletPostId);
  apis.post_del(postId);
  console.log(postId);
   navigate('/mypage');

};

// overlTrigger 때문인지, styled component 선선언 필요
const StPopover= (e, postId) =>  {
    console.log(postId)
    return(
  <Popover id="popover-basic">
    <Popover.Body>정말 삭제하시겠어요 ❓</Popover.Body>
    <StBtn del pop onClick={onDelClick(postId)}>
      네
    </StBtn>
  </Popover>
  )}
  ;
  
  
  export const UpdateDeleteBtn = (e, postId) => {
      //   console.log(postId);
    // const dispatch = useDispatch();
    // dispatch(deletPostId(postId));
    navigate = useNavigate();

  return (
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <StBtn>수정하기</StBtn>{" "}
      <OverlayTrigger postId={postId} trigger="click" placement="bottom" overlay={StPopover(postId)}>
        <StBtn del postId={postId}>삭제하기</StBtn>
      </OverlayTrigger>
    </div>
  );
};
