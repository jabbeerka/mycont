import React from 'react';
import styles from './Messages.module.sass';

const Messages = ({message}) => {
    return(
        <div className={styles.dialogs__wrapp}>
            <img src="https://b.radikal.ru/b20/2006/4a/164908d1f33e.png" alt="message" className={styles.dialogs__icon2}/>
            <div className={styles.dialogs__message}>{message}</div>
        </div>
    )
}
export default Messages