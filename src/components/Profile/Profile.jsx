import React from 'react';
import styles from './Profile.module.sass';
import MyHeader from './MyHeader';
import MyInfo from './MyInfo';
import MyPost from './Post/MyPost';
import SendPost from './SendPost';



const Profile = () => {
    return (
      <div className={styles.content}>
        <MyHeader/>
        <MyInfo/>
        <SendPost/>
        <MyPost
        message="Hello, Are you watch me ?"/>
        <MyPost
        message="I'm start learning to React!"/>
      </div>
    )
}

export default Profile;