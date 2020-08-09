import React from 'react';
import styles from './News.module.sass';
import header from '../../../images/news-header.png';


const News = () => {
    return (
        <div className={styles.content}>
            <img src={header} alt="bgimage" className={styles.img} />
        </div>
    )
}

export default News;