import PostCard from "../components/PostCard";
import WriteFixedBtn from "../components/WriteFixedBtn";
import StLayout from "../components/layout/Layout";
import { StSecTitle } from "./MyPage";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateIshidden } from "../redux/modules/postSlice";
import { useDispatch } from "react-redux";
import ViewModal from "../components/ViewModal";
import { __getOnePost, __getAll } from "../redux/asyncThunk/asyncPost";
import apis from "../api/axios";
import ErrorBoundary from "../components/ErrorBoundary";
import { getCookie } from "../shared/Cookie";


const Home2 = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState("");
  const dispatch = useDispatch();

  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

  // const showAll = () => {
  //   apis.post_all().then((res) => {
  //     console.log(res?.data.data)
  //     setPosts(res?.data.data);
  //   });
  // };

  const payload2 = async () => {
    const {data} = await dispatch(__getAll());
    console.log("home", data);
  }

  const payload3 = () => {
    dispatch(__getAll()).then((res)=>
    {
      console.log("home2",res);
    }
    )
  }

  useEffect(() => {
    // showAll();
    payload2();
    payload3();
    // setPosts(dispatch(__getAll()));
    // console.log()
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleModal = (postId) => {
    handleShow();
    setPostId(postId);
  };

  return (
    <>
      <StLayout>
        <StSecTitle>All Genre 🎂</StSecTitle>
        <ErrorBoundary>
          <ViewModal
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
            postId={postId}
          />
        </ErrorBoundary>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {posts.map((post) => (
            <div key={post.postId} onClick={() => handleModal(post.postId)}>
              <PostCard
                post={post}
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
              />
            </div>
          ))}
        </div>
      </StLayout>
      {isLoggedIn ? <WriteFixedBtn /> : null}
    </>
  );
};

export default Home2;
