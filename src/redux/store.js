import {dialogsReduser} from './dialogs-reducer.js';
import {profileReduser} from './profile-reducer.js';



let store = {
    _state: {
        profilePage: {
            myAvatarURL: 'https://7themes.su/php/imres/resize.php?width=1920&height=1440&cropratio=4:3&image=/_ph/40/397399018.jpg',
            myPostsMessage: [
                { id: 1, likes: 22, message: 'asdasdsa' },
                { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
                { id: 3, likes: 0, message: `hello!! jdffffffffk` }
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

    dispatch(action) { //action {type: '...'} --NECESSARILY

        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}





window.store = store;

export {store};