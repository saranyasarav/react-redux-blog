import React from "react";
import PostAuthor from "./PostAuthor";
import { Link } from "react-router-dom";

const PostPart = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p className="postCredit">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  );
};

export default PostPart;
