import React from 'react';
import styles from './MyInfo.module.sass';
import avatar from '../../../../images/profile-avatar.png'

const MyInfo = () => {
    return (
      <section className={styles.prof}> 
        <img src={avatar} alt="avatar" className={styles.prof__avatar}/>
        <div className={styles.prof__wrap}>
        <span className={styles.prof__name}>J.Kholikov</span> <br/>
        <span className={styles.prof__info}>Date of Birthday: 16.10.1990 <br/> City: Moscow <br/> Job: Web Developer <br/> Web-site: www.jaykors.com</span>
        </div>
      </section>
    )
}

export default MyInfo;