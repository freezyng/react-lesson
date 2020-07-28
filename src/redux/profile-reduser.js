const UPDATE_NEW_MY_POST_TEXT = 'UPDATE-NEW-MY-POST-TEXT';
const ADD_MY_POST = 'ADD-MY-POST';


const profileReduser = (state, action) => {

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

export {profileReduser, addPostCreator, upDateNewMyPostTextCreator};