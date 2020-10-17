import {authAPI} from './../api/api';

const UPDATE_NEW_MY_POST_TEXT = 'UPDATE-NEW-MY-POST-TEXT';
const ADD_MY_POST = 'ADD-MY-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    myAvatarURL: 'https://7themes.su/php/imres/resize.php?width=1920&height=1440&cropratio=4:3&image=/_ph/40/397399018.jpg',
    myPostsMessages: [
        { id: 1, likes: 22, message: 'asdasdsa' },
        { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
        { id: 3, likes: 0, message: `hello!! jdffffffffk` }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MY_POST:
            let str = state.newPostText;

            return { 
                ...state,
                newPostText: '',
                myPostsMessages: [ ...state.myPostsMessages, {id: 4, likes: 0, message: str} ]
            }
        
        case UPDATE_NEW_MY_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
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
const setUserProfile = (profile) => {
    return{type: SET_USER_PROFILE, profile}
}

const getProfileThunk = (userId) => {
    return (dispatch) => {
        authAPI.getProfile(userId)
            .then( (response) => {
                dispatch(setUserProfile( response.data ))
        });
    }
}

export {profileReducer, addPostCreator, upDateNewMyPostTextCreator, getProfileThunk};