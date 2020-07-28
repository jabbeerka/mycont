import React from 'react';
import styles from './MyInfo.module.sass';
import Perloader from '../../Users/UsersBlock/Perloader';
import avatar from '../../../../images/users-avatar.png';
import ProfileStatus from '../ProfileStatus';

const MyInfo = ({profile, status}) => {
  if (!profile) {
      return <Perloader/>
  }
  return (
    <section className={styles.prof}> 
      <img src={profile.photos.large || avatar} alt="avatar" className={styles.prof__avatar}/>
      <div className={styles.prof__wrap}>
        <span className={styles.prof__name}> {profile.fullName} </span> <br/>
        <ProfileStatus status={"Hello my friend!"}/>
        <div className={styles.prof__info}> 
          <span>About me:</span> {profile.aboutMe}<br/> 
          <span>vk:</span> {profile.contacts.vk} <br/>
          <span>github:</span> {profile.contacts.github} <br/>
          <span>twitter:</span> {profile.contacts.twitter} <br/>
          <span>instagram:</span> {profile.contacts.instagram} <br/>
          <span>Job:</span> {profile.lookingForAJobDescription} <br/>
        </div>
      </div>
    </section>
  )
}

export default MyInfo;