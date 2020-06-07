import React from 'react';
import styles from './Dialogs.module.sass';
import DialogsHeader from './DialogsHeader';
import Messages from './Messages';
import Names from './Names';

const Dialogs = ({state}) => {
    let namesObj = state.namesArr.map( n => <Names name={n.name} id={n.id} />)
    let messagesObj = state.messagesArr.map( m => <Messages message={m.message} id={m.id} />)
    return (
        <div className={styles.content}>
            <DialogsHeader />
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names}>
                    {namesObj}
                </ul>

                <div className={styles.dialogs__messages}>
                    {messagesObj}
                </div>
            </div>
        </div>
    );
} 

export default Dialogs;