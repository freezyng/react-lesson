const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

type dialogDataType = {
    id: number
    name: string
}

type dialogMessagesType = {
    id: number
    message: string
}

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
    ] as Array<dialogDataType>,
    dialogsMessages: [
        { id: 1, message: 'asdasdsa' },
        { id: 2, message: 'asdsd asd ww e qwe' },
        { id: 3, message: 'сятухо' },
    ] as Array<dialogMessagesType>,
};

type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case SEND_NEW_MESSAGE:
            let str = action.newMessageText;
            return {
                ...state,
                dialogsMessages: [ ...state.dialogsMessages, {id: ++state.dialogsMessages.length, message: str}]
            };

        default:
            return state;

    }
    
}

type sendNewMessageCreatorType = {
    type: typeof SEND_NEW_MESSAGE
    newMessageText: string
}

const sendNewMessageCreator = (newMessageText: string): sendNewMessageCreatorType => {
    return {type: SEND_NEW_MESSAGE, newMessageText}
}

export {dialogsReducer, sendNewMessageCreator};