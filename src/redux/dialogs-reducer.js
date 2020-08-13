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
    let stateCopy = { ...state };
    stateCopy.dialogsMessage = [ ...state.dialogsMessage ]; 


    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let str = stateCopy.newMessageText.replace(/\s/g, '');
            

            if(str) {
                let postId;
                for (let i = 0; i < stateCopy.dialogsMessage.length; i++ ) {
                    postId = stateCopy.dialogsMessage[i].id + 1;
                }

                let post = {
                    id: postId,
                    message: stateCopy.newMessageText
                };
        
                stateCopy.dialogsMessage.push(post);
                stateCopy.newMessageText = '';
            }
            return stateCopy;

        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;

        default:
            return stateCopy;

    }
    
}

const sendNewMessageCreator = () => {
    return {type: SEND_NEW_MESSAGE}
}
const upDateNewMessageTextCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export {dialogsReducer, sendNewMessageCreator, upDateNewMessageTextCreator};