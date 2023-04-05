import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h2 className="text-center text-5xl font-bold py-5">Load Posts: {posts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-32 mt-12 pb-12">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
