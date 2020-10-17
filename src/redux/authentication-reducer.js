import { authAPI } from './../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
} 

const authUser = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }

}

const setAuthUserData = (email, login, userId) => {
    return {type: SET_USER_DATA, data: {email, login, userId}}
}

const authMeThunk = () => {
    return (dispatch) => {
        authAPI.me()
        .then( (response) => {
            if(response.data.resultCode === 0){
                let {email, login, id} = response.data.data
                dispatch(setAuthUserData(email, login, id))
            }
        })
    }
}



export  {authUser, setAuthUserData, authMeThunk};