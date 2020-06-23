import React from 'react';
import styles from './News.module.sass';
import storeContext from '../../../Redux/store-context';


const News = () => {
    return (
        <storeContext.Consumer>
            {(store)=> {
                return (
                    <div className={styles.content}>
                        <img src={store.getState().headers.imgs[3].bgimage} alt="bgimage" className={styles.img}/>
                    </div>
                )
            }}
        </storeContext.Consumer>
    );
} 

export default News;