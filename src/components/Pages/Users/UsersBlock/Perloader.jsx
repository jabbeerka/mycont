import React from 'react';
import styles from './Perloader.module.sass';
import perloader from '../../../../images/loader.gif'


const Perloader = (props) => {
    return (
        <img src={perloader} alt="perloader" className={styles.perloader}/>
    )
}
export default Perloader;