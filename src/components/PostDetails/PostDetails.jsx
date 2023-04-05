import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { body } = post;
  return (
    <div className="md:px-32 mt-12">
     <div className="border-2 border-gray-700 rounded-lg p-5">
     <h2 className="text-4xl font-bold ">Description: {body}</h2>
     </div>
    </div>
  );
};

export default PostDetails;
