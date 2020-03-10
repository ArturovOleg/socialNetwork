import React from "react";
import classes from './side-bar.module.scss'
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar">
      <nav className={classes.nav}>
        <span><NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink></span>
        <span><NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink></span>
        <span><NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink></span>
        <span><NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink></span>
        <span><NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink></span>
      </nav>
    </aside>
  );
}

export default SideBar;
