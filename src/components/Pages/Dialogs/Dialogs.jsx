import React from 'react';
import styles from './Dialogs.module.sass';
import Messages from './Messages';
import Names from './Names';

const Dialogs = ({state, header}) => {
    let namesObj = state.namesArr.map( n => <Names name={n.name} id={n.id} />)
    let messagesObj = state.messagesArr.map( m => <Messages message={m.message} id={m.id} />)
    return (
        <div className={styles.content}>
            <img src={header.imgs[1].bgimage} alt="bgimage" className={styles.img}/>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names}>
                    {namesObj}
                </ul>

                <div className={styles.dialogs__messages}>
                    {messagesObj}
                    <textarea placeholder="message..." name="messages" id="2" cols="5" rows="5"></textarea>
                    <button className={styles.dialogs__button}>Send</button>
                </div>
            </div>
            
        </div>
    );
} 

export default Dialogs;