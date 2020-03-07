import React from 'react';
import './Dialogs.css';
import { DialogsItem, DialogsMessage } from './Item-message/DialogsItem-message.jsx';


const Dialogs = (props) => {
    let dialogsNameComponents = props.dialogsData.map((dialogName) => {
        return <DialogsItem id={dialogName.id} name={dialogName.name} />
    });
    let dialogsMessageComponents = props.dialogsMessage.map((dialogMessage) => {
        return <DialogsMessage message={dialogMessage.message} />
    });

    return (
        <div className="dialogs">
            <div className="person column">
                {dialogsNameComponents}
            </div>
            <div className="column">
                {dialogsMessageComponents}
            </div>
        </div>
    );
}

export default Dialogs;