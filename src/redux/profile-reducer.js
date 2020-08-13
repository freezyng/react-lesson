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
    let stateCopy = { ...state };
    stateCopy.myPostsMessage = [ ...state.myPostsMessage ];


    switch(action.type) {
        case ADD_MY_POST:
            let str = stateCopy.newPostText.replace(/\s/g, '');

            if(str) {
                let postId;
                for (let i = 0; i < stateCopy.myPostsMessage.length; i++ ) {
                    postId = stateCopy.myPostsMessage[i].id + 1;
                }

                let post = {
                    id: postId,
                    likes: 0,
                    message: stateCopy.newPostText
                };
        
                stateCopy.myPostsMessage.push(post);
                stateCopy.newPostText = '';
            }
            return stateCopy;
        
        case UPDATE_NEW_MY_POST_TEXT:
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default: 
            return stateCopy;
    }
}


const addPostCreator = () => {
    return {type: ADD_MY_POST}
}
const upDateNewMyPostTextCreator = (text) => {
    return {type: UPDATE_NEW_MY_POST_TEXT, newText: text}
}

export {profileReducer, addPostCreator, upDateNewMyPostTextCreator};