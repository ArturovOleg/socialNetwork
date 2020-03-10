import React from "react";
import classes from "./new-post.module.scss";
import Post from "./Post/Post";

function NewPost(props) {

  const posts = props.posts.map(post => <Post post={post} />);

  let newPostText = React.createRef();
  let addNewPost = () => {
    props.addNewPost()
  };

  let onPostUpdate = () => {
    let text = newPostText.current.value;
    props.onPostUpdate(text)
  }

  return (
    <>
      <div className={classes.myPostsWrapper}>
        <div className="main-block">
          <div className={classes.newPostWrapper}>
            <div className={classes.title}>My Posts</div>
            <textarea ref={newPostText} value={props.newPostText} onChange={onPostUpdate} />
            <button onClick={addNewPost}>Add Post</button>
          </div>
        </div>
        {posts}
      </div>
    </>
  );
}

export default NewPost;
