import React from 'react';
import styles from './Profile.module.sass';
import MyInfo from './MyInfo/';
import SendPost from './Post/SendPost/';
import MyPost from './Post/MyPost/';
import header from '../../../images/profile-header.png';


const Profile = () => {
  return (
    <div className={styles.content}>
      <img src={header} alt="header" className={styles.img} />
      <MyInfo />
      <SendPost />
      <MyPost />
    </div>
  )
}

export default Profile;