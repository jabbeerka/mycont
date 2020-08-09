import React from 'react';
import styles from './Nav.module.sass';


const Navigator = ({ links, friends }) => {
  return (
    <div className={styles.nav}>
      {links}
      <div className={styles.header}>
        <hr></hr>
              Friends online:
          </div>
      <div className={styles.wrap}>
        {friends}
      </div>
    </div>
  )
}

export default Navigator;