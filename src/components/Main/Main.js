import React from "react";
import classes from "./main.module.scss"
import Profile from "./Profile/Profile";
import NewPostContainer from "./NewPost/NewPostContainer";

function Main(props) {
  return (
    <div className={classes.mainContentWrapper}>
      <Profile />
      <NewPostContainer />
    </div>
  );
}

export default Main;