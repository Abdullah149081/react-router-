import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();

  const handlerBtn = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="border-2 border-amber-700 flex flex-col  p-5 rounded-lg ">
      <div className="space-y-4 mb-6">
        <h2 className="text-4xl font-bold">Id: {id}</h2>
        <p className="text-2xl text-pink-500 font-medium">Title: {title}</p>
      </div>
      <button onClick={handlerBtn} className="btn btn-error text-gray-900 font-bold mt-auto ">
        Show me details
      </button>
    </div>
  );
};

export default Post;
