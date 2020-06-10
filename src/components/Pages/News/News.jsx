import React from 'react';
import styles from './News.module.sass';


const News = ({header}) => {
    return (
        <div className={styles.content}>
            <img src={header.imgs[3].bgimage} alt="bgimage" className={styles.img}/>
        </div>
    );
} 

export default News;