import React from 'react';
import styles from './Musics.module.sass';


const Musics = ({header}) => {
    return (
        <div className={styles.content}>
            <img src={header.imgs[2].bgimage} alt="bgimage" className={styles.img}/>
        </div>
    );
} 

export default Musics;