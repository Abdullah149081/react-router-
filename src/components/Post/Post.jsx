import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;
  return (
    <div className="border-2 border-amber-700  p-5 rounded-lg space-y-4">
      <h2 className="text-4xl font-bold">Id: {id}</h2>

      <p className="text-2xl text-pink-500 font-medium">Title: {title}</p>

      <p className="text-success font-bold">
        <Link to={`/posts/${id}`}>Show me Details</Link>
      </p>
    </div>
  );
};

export default Post;
