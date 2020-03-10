import React from "react";
import classes from "./profile.module.scss"
import defAva from '../../../images/def-ava.png'

function Profile() {
  return (
    <div className={classes.profileWrapper}>
      <div className={`main-block ${classes.mainBlock}`}>
        <div className={classes.avatarBlock}>
          <img src={defAva}></img>
        </div>
        <div className={classes.userInfoBlock}>
          <span>FirstName</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
