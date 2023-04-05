import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { body } = post;
  const navigate = useNavigate();
  const handlerGoBck = () => {
    navigate(-1);
  };

  return (
    <div className="md:px-32 mt-12">
      <div className="border-2 border-gray-700 rounded-lg p-5">
        <h2 className="text-4xl font-bold ">Description: {body}</h2>
      </div>
      <button onClick={handlerGoBck} className="mt-4">
        Go back
      </button>
    </div>
  );
};

export default PostDetails;
