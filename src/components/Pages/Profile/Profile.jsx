import React from 'react';
import styles from './Profile.module.sass';
import MyInfo from './MyInfo/';
import SendPost from './Post/SendPost/';
import MyPost from './Post/MyPost/'



const Profile = (props) => {
  return (
          <div className={styles.content}>
          <img src={props.header} alt="header" className={styles.img}/>
          <MyInfo />
          <SendPost />
          <MyPost />
          </div>
        )
}

export default Profile;