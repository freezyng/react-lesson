import React from 'react';
import Dialogs from './Dialogs.jsx';
import { upDateNewMessageTextCreator, sendNewMessageCreator } from '../../redux/dialogs-reducer.js';
import StoreContext from '../../StoreContext.js';


const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
    {   (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendNewMessageCreator())
            }
            let onNewMessageChange = (text) => {
                store.dispatch(upDateNewMessageTextCreator(text))

            }
            
            return ( <Dialogs 
                upDateNewMessageText={onNewMessageChange} 
                sendMessage={onSendMessageClick} 
                dialogsPage={state} /> 
            );
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;