import React from 'react';
import styles from './Nav.module.sass';


const Navigator = (props) => {
        return (
          <div className={styles.nav}>
          {props.links}
          <div className={styles.header}>
            <hr></hr>
              Friends online:
          </div>
          <div className={styles.wrap}>
            {props.friends}
          </div>
        </div>
        )
      }

export default Navigator;