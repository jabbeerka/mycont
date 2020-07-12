import React from 'react';
import styles from './News.module.sass';


const News = (props) => {
        return (
            <div className={styles.content}>
                <img src={props.header} alt="bgimage" className={styles.img}/>
            </div>
        )  
}

export default News;