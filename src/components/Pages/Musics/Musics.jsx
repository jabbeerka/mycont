import React from 'react';
import styles from './Musics.module.sass';
import header from '../../../images/musics-header.png';

const Musics = () => {
    return (
        <div className={styles.content}>
            <img src={header} alt="header" className={styles.img} />
        </div>
    )
}

export default Musics;