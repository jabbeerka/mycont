import React from 'react';
import Nav from './Nav';
import styles from './Nav.module.sass';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.navPage.friends.map(item =>
      <div className={styles.img_wrap}>
        <img src={item.img} alt="p_icon"/>
        <span>{item.name}</span>
      </div>
    ),
    links: state.navPage.links.map(item => 
      <div className={styles.link}>
        <NavLink to={item.link} activeClassName={styles.active}>
          {item.name}
        </NavLink>
      </div>)
  }
}

const NavContainer = connect(mapStateToProps)(Nav)

export default NavContainer;