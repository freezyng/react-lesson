import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormComponent } from '../utils/FormsControls';
import { maxLength, required } from '../utils/Validators';
import './Dialogs.css';
import { DialogsItem, DialogsMessage } from './Item-message/DialogsItem-message.jsx';

const maxLength100 = maxLength(100);
const Textarea = FormComponent('textarea');


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsNamesComponents = state.dialogsData.map((dialogName) => {
        return <DialogsItem id={dialogName.id} name={dialogName.name} key={dialogName.id} />
    });
    let dialogsMessagesComponents = state.dialogsMessages.map((dialogMessages) => {
        return <DialogsMessage message={dialogMessages.message} key={dialogMessages.id} />
    });

    const addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageText);
    }


    return (
        <div className="dialogs">
            <div className="person column">
                {dialogsNamesComponents}
            </div>
            <div className="column">
                <div>{dialogsMessagesComponents}</div>
                <div className="new__message__text"> 
                <AddMessageDialogRedux onSubmit={addNewMessage}/>     
                </div>
            </div>
        </div>
    );
}


const AddMessageDialog = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength100]} name='newMessageText' placeholder='Написать...'/>
            <button>Отправить</button> 
        </form>
    );
}

const AddMessageDialogRedux = reduxForm({form: 'AddMessageDialogForm'})(AddMessageDialog)


export default Dialogs;