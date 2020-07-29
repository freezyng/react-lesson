const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'вася пятухов' },
        { id: 2, name: 'пятухов' },
        { id: 3, name: 'вася' },
        { id: 4, name: 'втухов' },
        { id: 5, name: 'васов' },
        { id: 6, name: 'ас тух' },
        { id: 7, name: 'ся тухов' },
        { id: 8, name: 'лоо лотухов' }
    ],
    dialogsMessage: [
        { id: 1, message: 'asdasdsa' },
        { id: 2, message: 'asdsd asd ww e qwe' },
        { id: 3, message: 'сятухо' },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

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

export {dialogsReducer, sendNewMessageCreator, upDateNewMessageTextCreator};