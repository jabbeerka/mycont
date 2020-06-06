import React from 'react';
import styles from './Dialogs.module.sass';
import DialogsHeader from './DialogsHeader';
import Messages from './Messages';
import Names from './Names';

const Dialogs = () => {
    let namesArr = [
        {name: 'Eugeniy', id: 1}, 
        {name: 'Julia', id: 2}, 
        {name: 'Miron', id: 3}, 
        {name: 'Amir', id: 4}, 
        {name: 'Jahon', id: 5} 
    ]
    let names = namesArr.map( n => <Names name={n.name} id={n.id} />)

    let messagesArr = [
        {message: "Hello, my Dear!", id: 1}, 
        {message: "I like you!", id: 2}, 
        {message: "What are you doing?", id: 3}, 
        {message: "Whats Happened", id: 4}, 
        {message: "Where is my daughter?", id: 5}, 
    ]
    let messages = messagesArr.map( m => <Messages message={m.message} id={m.id} />)
    return (
        <div className={styles.content}>
            <DialogsHeader />
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names}>
                    {names}
                </ul>

                <div className={styles.dialogs__messages}>
                    {messages}
                </div>
            </div>
        </div>
    );
} 

export default Dialogs;