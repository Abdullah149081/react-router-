import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();

  const handlerBtn = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="border-2 border-amber-700  p-5 rounded-lg space-y-4">
      <h2 className="text-4xl font-bold">Id: {id}</h2>

      <p className="text-2xl text-pink-500 font-medium">Title: {title}</p>

      <p className="text-success font-bold">
        <button onClick={handlerBtn} className="btn">
          Show me details
        </button>
      </p>
    </div>
  );
};

export default Post;
