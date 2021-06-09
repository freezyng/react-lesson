import { authAPI, profileAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const ADD_MY_POST = 'ADD-MY-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    myAvatarURL: 'https://7themes.su/php/imres/resize.php?width=1920&height=1440&cropratio=4:3&image=/_ph/40/397399018.jpg',
    myPostsMessages: [
        { id: 1, likes: 22, message: 'asdasdsa' },
        { id: 2, likes: 2, message: 'asdsd asd ww e qwe' },
        { id: 3, likes: 0, message: `hello!! jdffffffffk` }
    ],
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MY_POST:
            return {
                ...state,
                myPostsMessages: [
                    ...state.myPostsMessages,
                    { id: ++state.myPostsMessages.length, likes: 0, message: action.newMyPost }
                ]
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

//actions

const addPostCreator = (newMyPost) => {
    return { type: ADD_MY_POST, newMyPost }
}
const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}
const setStatus = (status) => {
    return { type: SET_STATUS, status }
}
const savePhotoSuccess = (photos) => {
    return { type: SAVE_PHOTO_SUCCESS, photos }
}

//thunks

const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }
}

const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

const getProfileThunk = (userId) => {
    return async (dispatch) => {
        let response = await authAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

const saveProfile = (profileData) => {
    return async (dispatch, setState) => {
        const userId = setState().authUser.userId
        let response = await profileAPI.saveProfile(profileData)
        if (response.data.resultCode === 0) {
            dispatch(getProfileThunk(userId))
        } else {
            let messagesContact = response.data.messages[0]
            let ii = messagesContact.indexOf('->', 0)
            let nameContact = messagesContact.slice(ii+2, messagesContact.length-1).toLowerCase()
            debugger
            dispatch(stopSubmit('profile-data-form', { "contacts": {nameContact: messagesContact } }));
        }
    }
}

export { profileReducer, addPostCreator, getProfileThunk, getStatus, updateStatus, savePhoto, saveProfile };