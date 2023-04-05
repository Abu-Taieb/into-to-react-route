import React from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const post = useLoaderData();
  console.log(post);
  const { id, title, userId, body } = post;

  // Optional

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>About Our Post Details</h3>
      <div className="postDetails">
        <div className="userId">
          <h4>Post ID: {id}</h4>
          <h4>User ID: {userId}</h4>
        </div>
        <h3 className="title">Title: {title}</h3>
        <p>Description: {body}</p>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

export default PostDetail;
