import React from 'react';
import styles from './Dialogs.module.sass';
import Messages from './Messages';
import Names from './Names';
import {changeMessageInputActionCreator, addMessageActionCreator} from '../../../Redux/dialogs-page-reducer';

const Dialogs = (props) => {
    let namesObj = props.state.messagesPage.namesArr.map( n => <Names name={n.name} id={n.id} />);
    let messagesObj = props.state.messagesPage.messagesArr.map( m => <Messages message={m.message} id={m.id} />);
    let newElem = React.createRef()
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let changeInput = () => {
        let text = newElem.current.value;
        props.dispatch(changeMessageInputActionCreator(text))
    }

    return (
        <div className={styles.content}>
            <img src={props.state.headers.imgs[1].bgimage} alt="bgimage" className={styles.img}/>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names} activeClassName={styles.dialogs__names_active} >
                    {namesObj}
                </ul>

                <div className={styles.dialogs__messages}>
                    {messagesObj}
                    <textarea onChange={ changeInput } ref={newElem} name="messages" cols="5" rows="5" value={props.state.messagesPage.inputMessageArea}></textarea>
                    <button onClick={ sendMessage } className={styles.dialogs__button}>Send</button>
                </div>
            </div>
            
        </div>
    );
} 

export default Dialogs;