import React from 'react';
import styles from './Dialogs.module.sass';

const Dialogs = (props) => {
    
    let newElem = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }

    let changeInput = () => {
        let text = newElem.current.value;
        props.changeInput(text);
    }

    return (
        <div className={styles.content}>
            <img src={props.header} alt="bgimage" className={styles.img}/>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names}>
                    {props.names}
                </ul>
                <div className={styles.dialogs__messages}>
                    {props.messages}
                    <textarea onChange={ changeInput } ref={newElem} name="messages" cols="5" rows="5" value={props.inputValue}></textarea>
                    <button onClick={ sendMessage } className={styles.dialogs__button}>Send</button>
                </div>
            </div>
            
        </div>
    );
} 

export default Dialogs;