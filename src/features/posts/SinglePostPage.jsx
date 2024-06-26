import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2> Post not found!</h2>
      </section>
    );
  }
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  );
};

export default SinglePostPage;
