import React from "react";
import classes from "./post.module.scss"
import defAva from "../../../../images/def-ava.png"

function Post(props) {
  return (
    <div className={classes.postWrapper}>
      <div className={`main-block ${classes.mainBlock}`}>
        <div className={classes.postWriter}>
          <img src={defAva}/>
          <div className={classes.postInfo}>
            <span className={classes.name}>First Name</span>
            <span className={classes.date}>Date</span>
          </div>
        </div>
        <div className={classes.postBody}>
          <span>
            {props.post.post}
          </span>
        </div>
        <div className={classes.footer}>Like {props.post.likesCount}</div>
      </div>
    </div>
  );
}

export default Post;