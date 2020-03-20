let rerenderAllComponent;
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
            textareaNewText: 'hello1',
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
                { id: 3, message: 'ся тухов' },
                { id: 4, message: ' qweeqwe wqe qwe ' },
                { id: 5, message: 'втухов' },
                { id: 6, message: 'ся тухов' },
                { id: 7, message: 'васов' },
                { id: 8, message: 'ся тухов' },
                { id: 9, message: 'ас тух' },
                { id: 10, message: 'ся тухов' },
                { id: 11, message: 'ся тухов' },
                { id: 12, message: 'лоо лотухов' }
            ],
    
        }
    
    },

    getState() {
        return this._state;
    },

    updateNewMyPostText(newText) {
        this._state.profilePage.textareaNewText = newText;
        rerenderAllComponent(this.getState());
    },

    addMyPost() {
        let str = this._state.profilePage.textareaNewText.replace(/\s/g, '');

        if(str) {
            let post = {
                id: 4,
                likes: 0,
                message: this._state.profilePage.textareaNewText
            };
    
            this._state.profilePage.myPostsMessage.push(post);
            this._state.profilePage.textareaNewText = '';
        }
        rerenderAllComponent(this.getState());
    },

    subscribe(observer) {
        rerenderAllComponent = observer;
    },
}



window.store = store;

export {store};