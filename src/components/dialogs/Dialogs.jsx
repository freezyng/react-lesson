import React from 'react';
import { Redirect } from 'react-router-dom';
import './Dialogs.css';
import { DialogsItem, DialogsMessage } from './Item-message/DialogsItem-message.jsx';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let newMessageText = state.newMessageText;

    let dialogsNamesComponents = state.dialogsData.map((dialogName) => {
        return <DialogsItem id={dialogName.id} name={dialogName.name} key={dialogName.id} />
    });
    let dialogsMessagesComponents = state.dialogsMessages.map((dialogMessages) => {
        return <DialogsMessage message={dialogMessages.message} key={dialogMessages.id} />
    });


    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.upDateNewMessageText(text);
    }

    if(!props.isAuth){
        return <Redirect to='/login'/>
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