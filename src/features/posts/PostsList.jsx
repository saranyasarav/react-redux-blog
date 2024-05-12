import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";
//import PostAuthor from './PostAuthor'
import { useEffect } from "react";
import PostPart from "./PostPart";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p> "Loading..."</p>;
  } else if (postStatus === "Succeeded") {
     // Reverse the array of posts to display the latest one first
     const reversedPosts = posts.slice().reverse();
     content = reversedPosts.map((post) => <PostPart key={post.id} post={post} />);
    //content = posts.map((post) => <PostPart key={post.id} post={post} />);
  } else if (postStatus === "failed") {
    content = <p>{postError}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;
