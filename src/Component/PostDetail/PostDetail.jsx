import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const{id, title, userId, body} = post;


    // Optional 

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }


    return (
        <div>
            <h3>About Our Post Details</h3>
            <div className="">
                <h5>Post ID: {id}</h5>
                <h5>Title: {title}</h5>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetail;