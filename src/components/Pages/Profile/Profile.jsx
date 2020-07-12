import React from 'react';
import styles from './Profile.module.sass';
import MyInfo from './MyInfo';
import SendPostContainer from './Post/SendPost/SendPostContainer';
import MyPostContainer from './Post/MyPost/MyPostContainer'



const Profile = (props) => {
  return (
          <div className={styles.content}>
          <img src={props.header} alt="header" className={styles.img}/>
          <MyInfo/>
          <SendPostContainer />
          <MyPostContainer />
          </div>
        )
}

export default Profile;