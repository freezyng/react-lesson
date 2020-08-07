import React from 'react';
import Dialogs from './Dialogs.jsx';
import { upDateNewMessageTextCreator, sendNewMessageCreator } from '../../redux/dialogs-reducer.js';


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendNewMessageCreator())
    }
    let onNewMessageChange = (text) => {
        props.store.dispatch(upDateNewMessageTextCreator(text))

    }

    return ( <Dialogs upDateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick} 
        dialogsPage={state} /> );
}

export default DialogsContainer;