import React from 'react';
import styles from './Elements.module.sass';
import preloader from  '../images/loader.gif';


const Preloader = (props) => {
    return (
        <img src={preloader} alt="perloader" className={styles.preloader}/>
    )
}
export default Preloader;