import React from 'react';
import styles from './Musics.module.sass';
import storeContext from '../../../Redux/store-context'

const Musics = ({header}) => {
    return (
        <storeContext.Consumer>
            {(store)=> {
                return (
                    <div className={styles.content}>
                        <img src={store.getState().headers.imgs[2].bgimage} alt="bgimage" className={styles.img}/>
                    </div>
                )
            }}
        </storeContext.Consumer>
    );
} 

export default Musics;