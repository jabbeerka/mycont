import React from 'react';
import styles from './Messages.module.sass';
import messageIcon from '../../../../images/messages-icon.png'

const Messages = ({message}) => {
    return(
        <div className={styles.dialogs__wrapp}>
            <img src={messageIcon} alt="message" className={styles.dialogs__icon2}/>
            <div className={styles.dialogs__message}>{message}</div>
        </div>
    )
}
export default Messages