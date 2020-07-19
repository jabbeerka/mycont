import React from 'react';
import styles from './MyInfo.module.sass';
import Perloader from '../../Users/UsersBlock/Perloader';
import avatar from '../../../../images/users-avatar.png'

const MyInfo = ({profile}) => {
  if (!profile) {
      return <Perloader/>
  }
  console.log(profile)
    return (
      <section className={styles.prof}> 
        <img src={profile.photos.large || avatar} alt="avatar" className={styles.prof__avatar}/>
        <div className={styles.prof__wrap}>
    <span className={styles.prof__name}> {profile.fullName} </span> <br/>
        <span className={styles.prof__info}> 
          About me: {profile.aboutMe}<br/> 
          vk: {profile.contacts.vk} <br/>
          github: {profile.contacts.github} <br/>
          twitter: {profile.contacts.twitter} <br/>
          instagram: {profile.contacts.instagram} <br/>
          Job: {profile.lookingForAJobDescription} <br/>
        </span>
        </div>
      </section>
    )
}

export default MyInfo;