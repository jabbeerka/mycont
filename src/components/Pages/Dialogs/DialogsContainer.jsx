import React from 'react';
import Messages from './Messages';
import Names from './Names';
import {changeMessageInputActionCreator, addMessageActionCreator} from '../../../Redux/dialogs-page-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    let inputValue = state.messagesPage.inputMessageArea
    let namesObj = state.messagesPage.namesArr.map( n => <Names name={n.name} id={n.id} />);
    let messagesObj = state.messagesPage.messagesArr.map( m => <Messages message={m.message} id={m.id} />);
    let header = state.headers.imgs[1].bgimage
    return {
        names: namesObj,
        messages:messagesObj, 
        inputValue: inputValue,
        header: header
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: ()=> {
            dispatch(addMessageActionCreator());
        },
        changeInput:(text)=> {
            dispatch(changeMessageInputActionCreator(text));
        },
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;