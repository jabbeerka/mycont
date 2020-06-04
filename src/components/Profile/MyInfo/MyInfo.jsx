import React from 'react';
import styles from './MyInfo.module.sass';


const MyInfo = () => {
    return (
      <section className={styles.prof}> 
        <img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="avatar" className={styles.prof__avatar}/>
        <div className={styles.prof__wrap}>
        <span className={styles.prof__name}>J.Kholikov</span> <br/>
        <span className={styles.prof__info}>Date of Birthday: 16.10.1990 <br/> City: Moscow <br/> Job: Web Developer <br/> Web-site: www.jaykors.com</span>
        </div>
      </section>
    )
}

export default MyInfo;