import React from 'react';
import styles from './Musics.module.sass';
import MusicsHeader from './MusicsHeader';


const Musics = () => {
    return (
        <div className={styles.content}>
            <MusicsHeader />
        </div>
    );
} 

export default Musics;