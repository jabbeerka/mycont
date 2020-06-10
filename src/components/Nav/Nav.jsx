import React from 'react';
import styles from './Nav.module.sass';
import { NavLink } from 'react-router-dom';


const Navigator = ({state}) => {
  let data = state.links.map(item => 
    <div className={styles.link}>
      <NavLink to={item.link} activeClassName={styles.active}>
        {item.name}
      </NavLink>
    </div>
    )
  let friendsZone = state.friends.map(item => 
    <div className={styles.img_wrap}>
      <img src={item.img} alt="p_icon"/>
      <span>{item.name}</span>
    </div>
  )
    return(
      
        <div className={styles.nav}>
          {data}
        <div className={styles.header}> <hr></hr>Friends online:</div>
        <div className={styles.wrap}>
          {friendsZone}
        </div>
        
      </div>
    )
    
}
export default Navigator;