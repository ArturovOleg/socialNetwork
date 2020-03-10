import React from 'react'
import classes from '../dialogs.module.scss'

const Message = (props) => {
  return (
    <span className={classes.message}>{props.message}</span>
  );
}

export default Message;