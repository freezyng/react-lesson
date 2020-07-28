const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';


const dialogsReduser = (state, action) => {

    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let str = state.newMessageText.replace(/\s/g, '');

            if(str) {
                let post = {
                    id: 4,
                    message: state.newMessageText
                };
        
                state.dialogsMessage.push(post);
                state.newMessageText = '';
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;

    }
    
}

const sendNewMessageCreator = () => {
    return {type: SEND_NEW_MESSAGE}
}
const upDateNewMessageTextCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export {dialogsReduser, sendNewMessageCreator, upDateNewMessageTextCreator};