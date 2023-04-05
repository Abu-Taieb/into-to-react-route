import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend.name);
    const {name, address, email, phone} = friend;
    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h4>Name: {name}</h4>
            <h4>Phone: {phone}</h4>
        </div>
    );
};

export default FriendDetail;