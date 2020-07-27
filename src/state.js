const UPDATE_NEW_MY_POST_TEXT = 'UPDATE-NEW-MY-POST-TEXT';
const ADD_MY_POST = 'ADD-MY-POST';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            myPostsMessage: [
                { id: 1, likes: 22, message: 'asdasdsa' },
                { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
                { id: 3, likes: 0, message: `hello!! jdffffffffkkkkkkkkkkkkkkkkkjdffff 
                                ffkkkkkkkkjdffffffffkkkkkkkkkkkkkkkkkjdffffffffk 
                                kkkkkkkkkkkkkkkkjdffffkkkkkkkkkdffffffffkkkkkkk
                                kkkkkkkkkkjdffffffffkkkkkkkkkkkkkkkkkksdddddddddddd
                                ddddddddddddddddddddfhsjdfhasjcs sh fsaf  asfsaf as` }
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        }
    
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { //{type: 'ADD-MY-POST'}
        if(action.type === ADD_MY_POST) {
            let str = this._state.profilePage.newPostText.replace(/\s/g, '');

            if(str) {
                let post = {
                    id: 4,
                    likes: 0,
                    message: this._state.profilePage.newPostText
                };
        
                this._state.profilePage.myPostsMessage.push(post);
                this._state.profilePage.newPostText = '';
            }
            this._callSubscriber(this.getState());

        } else if(action.type === UPDATE_NEW_MY_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());

        } else if(action.type === SEND_NEW_MESSAGE) {
            let str2 = this._state.dialogsPage.newMessageText.replace(/\s/g, '');

            if(str2) {
                let post1 = {
                    id: 4,
                    message: this._state.dialogsPage.newMessageText
                };
        
                this._state.dialogsPage.dialogsMessage.push(post1);
                this._state.dialogsPage.newMessageText = '';
            }
            this._callSubscriber(this._state);

        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}

const addPostCreator = () => {
    return {type: ADD_MY_POST}
}
const upDateNewMyPostTextCreator = (text) => {
    return {type: UPDATE_NEW_MY_POST_TEXT, newText: text}
}
const sendNewMessageCreator = () => {
    return {type: SEND_NEW_MESSAGE}
}
const upDateNewMessageTextCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}


window.store = store;

export {store, addPostCreator, upDateNewMyPostTextCreator, sendNewMessageCreator, upDateNewMessageTextCreator};