import React from 'react';
import styles from './Profile.module.sass';
import MyInfo from './MyInfo';
import MyPost from './Post/MyPost';
import SendPost from './Post/SendPost';



const Profile = (props) => {
    return (
      <div className={styles.content}>
        <img src={props.header.imgs[0].bgimage} alt="bgimage" className={styles.img}/>
        <MyInfo/>
        <SendPost addPost={props.addPost} newTextArea={props.state.inputArea} changeNewInput={props.changeNewInput}/>
        <MyPost posts={props.state.postsArr}/>
      </div>
    )
}

export default Profile;