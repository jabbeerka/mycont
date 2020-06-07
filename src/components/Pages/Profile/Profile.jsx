import React from 'react';
import styles from './Profile.module.sass';
import MyHeader from './MyHeader';
import MyInfo from './MyInfo';
import MyPost from './Post/MyPost';
import SendPost from './Post/SendPost';



const Profile = ({state}) => {
    return (
      <div className={styles.content}>
        <MyHeader/>
        <MyInfo/>
        <SendPost/>
        <MyPost posts={state.postsArr}/>
      </div>
    )
}

export default Profile;