import React from 'react';
import Messages from './Messages';
import Names from './Names';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {changeMessageInputActionCreator, addMessageActionCreator} from '../../../Redux/dialogs-page-reducer';
import header from '../../../images/dialogs-header.png';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    let inputValue = state.messagesPage.inputMessageArea
    let namesObj = state.messagesPage.namesArr.map( n => <Names name={n.name} id={n.id} key={n.id}/>);
    let messagesObj = state.messagesPage.messagesArr.map( m => <Messages message={m.message} id={m.id} key={m.id}/>);
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
export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);