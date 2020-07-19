import React from 'react';
import styles from './Profile.module.sass';
import MyInfoContainer from './MyInfo/MyInfoContainer';
import SendPostContainer from './Post/SendPost/SendPostContainer';
import MyPostContainer from './Post/MyPost/MyPostContainer'



const Profile = (props) => {
  return (
          <div className={styles.content}>
          <img src={props.header} alt="header" className={styles.img}/>
          <MyInfoContainer/>
          <SendPostContainer />
          <MyPostContainer />
          </div>
        )
}

export default Profile;