import React from "react";
import { useLoaderData } from "react-router-dom";
import "./FriendDetail.css";

const FriendDetail = () => {
  const friend = useLoaderData();
  
  const { name, address, email, phone, website } = friend;
  return (
    <div className="friendDetail">
      <h3>
        Everything <span>Details</span> this person is here
      </h3>
      <hr />
      <div className="details">
        <h4>Name: {name}</h4>
        <h4>Phone: {phone}</h4>
        <h4>Email: {email}</h4>
        <h4>Address: {address.city}</h4>
        <h4>Website: {website}</h4>
      </div>
    </div>
  );
};

export default FriendDetail;
