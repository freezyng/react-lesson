const UPDATE_NEW_MY_POST_TEXT = 'UPDATE-NEW-MY-POST-TEXT';
const ADD_MY_POST = 'ADD-MY-POST';

let initialState = {
    myAvatarURL: 'https://7themes.su/php/imres/resize.php?width=1920&height=1440&cropratio=4:3&image=/_ph/40/397399018.jpg',
    myPostsMessage: [
        { id: 1, likes: 22, message: 'asdasdsa' },
        { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
        { id: 3, likes: 0, message: `hello!! jdffffffffk` }
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MY_POST:
            let str = state.newPostText.replace(/\s/g, '');

            if(str) {
                let post = {
                    id: 4,
                    likes: 0,
                    message: state.newPostText
                };
        
                state.myPostsMessage.push(post);
                state.newPostText = '';
            }
            return state;
        
        case UPDATE_NEW_MY_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}


const addPostCreator = () => {
    return {type: ADD_MY_POST}
}
const upDateNewMyPostTextCreator = (text) => {
    return {type: UPDATE_NEW_MY_POST_TEXT, newText: text}
}

export {profileReducer, addPostCreator, upDateNewMyPostTextCreator};