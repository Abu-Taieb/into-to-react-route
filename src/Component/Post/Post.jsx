import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;

  // Optional
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h5>ID: {id}</h5>
      <h5>Title: {title}</h5>
      <div className="postButton">
        <Link to={`/post/${id}`}> <button>Details</button></Link>
        <Link to={`/post/${id}`}>
          <button>Show Details</button>
        </Link>
        <button onClick={handleNavigation}>Button Handler</button>
      </div>
    </div>
  );
};

export default Post;
