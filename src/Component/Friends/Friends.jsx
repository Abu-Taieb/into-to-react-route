import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const data = useLoaderData();
    
    console.log(data);
    return (
        <div>
            <h3>There are my Friends!</h3>
        </div>
    );
};

export default Friends;