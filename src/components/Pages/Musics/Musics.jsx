import React from 'react';
import styles from './Musics.module.sass';

const Musics = (props) => {
        return (
            <div className={styles.content}>
                <img src={props.header} alt="header" className={styles.img}/>
            </div>
        )
} 

export default Musics;