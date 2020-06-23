import React from 'react';
import styles from './Settings.module.sass';
import storeContext from '../../../Redux/store-context'

const Settings = ({header} ) => {
    return (
        <storeContext.Consumer>
            {(store)=> {
                return (
                    <div className={styles.content}>
                        <img src={store.getState().headers.imgs[4].bgimage} alt="bgimage" className={styles.img}/>
                    </div>
                )
            }}
        </storeContext.Consumer>
    );
} 

export default Settings;