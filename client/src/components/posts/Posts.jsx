// POSTS
import { useQuery } from "@tanstack/react-query";

import Post from "../post/Post";

import { makeRequest } from "../../axios";

import "./Posts.scss";

function Posts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      makeRequest.get("/posts").then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="posts">
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
