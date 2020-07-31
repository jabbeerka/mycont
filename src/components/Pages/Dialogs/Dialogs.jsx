import React from 'react';
import styles from './Dialogs.module.sass';
import { reduxForm, Field } from 'redux-form';
import { Element } from '../../../elements/Forms';
import { required, maxLengthCreator} from '../../../utils/validator';

const maxLength50 = maxLengthCreator(50)
const TextArea = Element("textarea")

const Dialogs = (props) => {
    let addNewMessages = (value) => {
        props.sendMessage(value.newMessageBody)
    }
    return (
        <div className={styles.content}>
            <img src={props.header} alt="header" className={styles.img}/>
            <div className={styles.dialogs}>
                <ul className={styles.dialogs__names}>
                    {props.names}
                </ul>
                <div className={styles.dialogs__messages}>
                    {props.messages}
                    <DialogsReduxForm onSubmit={addNewMessages}/>
                </div>
            </div>
            
        </div>
    );
}
const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} name="addNewMessages">
            <Field className={styles.dialogs__textarea} component={TextArea} validate={[required, maxLength50]} name="newMessageBody" cols="5" rows="5"/>
            <button className={styles.dialogs__button}>Send</button>
        </form>
    )
}
const DialogsReduxForm = reduxForm({form: "messages"})(MessagesForm)

export default Dialogs;