import React from 'react';
import styles from './News.module.sass';
import NewsHeader from './NewsHeader';


const News = () => {
    return (
        <div className={styles.content}>
            <NewsHeader />
        </div>
    );
} 

export default News;