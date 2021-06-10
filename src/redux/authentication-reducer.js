import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from './../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authUser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }

}

const setAuthUserData = (email, login, userId, isAuth) => {
    return { type: SET_USER_DATA, payload: { email, login, userId, isAuth } }
}

const getCaptchaUrl = (captchaUrl) => {
    return { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
}

const setAuthUserDataThunk = () => {
    return async (dispatch) => {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { email, login, id } = response.data.data
            dispatch(setAuthUserData(email, login, id, true))
        }
    }
}

const loginThunk = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataThunk());
        } else {
            if(response.data.resultCode === 10){
                dispatch(getCaptchaThunk());
            }
            dispatch(stopSubmit('login', { _error: response.data.messages }));
        }
    }
}

const getCaptchaThunk = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrl(captchaUrl));
    }
}

const logoutThunk = () => {
    return async (dispatch) => {
        const response = await authAPI.logout()
        debugger
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export { authUser, setAuthUserData, setAuthUserDataThunk, loginThunk, logoutThunk, getCaptchaThunk };