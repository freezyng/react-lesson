import { stopSubmit } from 'redux-form';
import { authAPI } from './../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }

}

const setAuthUserData = (email, login, userId, isAuth) => {
    return { type: SET_USER_DATA, data: { email, login, userId, isAuth } }
}

const setAuthUserDataThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { email, login, id } = response.data.data
            dispatch(setAuthUserData(email, login, id, true))
        }
    }
}

const loginThunk = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataThunk());
        } else {
            dispatch(stopSubmit('login', { _error: response.data.messages }));
        }
    }
}

const logoutThunk = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export { authUser, setAuthUserData, setAuthUserDataThunk, loginThunk, logoutThunk };