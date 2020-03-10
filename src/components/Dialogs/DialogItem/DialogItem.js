import React from 'react'
import classes from '../dialogs.module.scss'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <span><NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink></span>
  );
}

export default DialogItem;