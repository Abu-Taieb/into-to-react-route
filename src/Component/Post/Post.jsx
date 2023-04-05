import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post);
    const {title, body, id} = post;
    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h5>Title: {title}</h5>
            <Link to={`/post/${id}`}> Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default Post;