import React from 'react';
import './Dialogs.css';
import { DialogsItem, DialogsMessage } from './Item-message/DialogsItem-message.jsx';
import { upDateNewMessageTextCreator, sendNewMessageCreator } from '../../redux/dialogs-reducer.js';


const Dialogs = (props) => {
    let dialogsNamesComponents = props.dialogsData.map((dialogName) => {
        return <DialogsItem id={dialogName.id} name={dialogName.name} />
    });
    let dialogsMessagesComponents = props.dialogsMessage.map((dialogMessage) => {
        return <DialogsMessage message={dialogMessage.message} />
    });
    let newMessageText = props.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendNewMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(upDateNewMessageTextCreator(text))

    }

    return (
        <div className="dialogs">
            <div className="person column">
                {dialogsNamesComponents}
            </div>
            <div className="column">
                <div>{dialogsMessagesComponents}</div>
                <div className="new__message__text"> 
                    <textarea onChange={ onNewMessageChange } value={newMessageText} placeholder='Написать...'></textarea> 
                    <button onClick={ onSendMessageClick }>Отправить</button> 
                </div>
            </div>
        </div>
    );
}

export default Dialogs;