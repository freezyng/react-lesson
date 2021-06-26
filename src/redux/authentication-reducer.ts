import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

type initialStateType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let initialState: initialStateType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authUser = (state = initialState, action: any): initialStateType => {
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

type setAuthUserDataPayloadType = {
    email: string | null
    login: string  | null
    userId: number | null
    isAuth: boolean
}

type setAuthUserDataType = {
    type: typeof SET_USER_DATA, payload: setAuthUserDataPayloadType
}

const setAuthUserData = (email: string | null, login: string | null, userId: number | null, isAuth: boolean): setAuthUserDataType => {
    return { type: SET_USER_DATA, payload: { email, login, userId, isAuth } }
}

type getCaptchaUrlType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

const getCaptchaUrl = (captchaUrl: string): getCaptchaUrlType => {
    return { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
}

const setAuthUserDataThunk = () => {
    return async (dispatch: any) => {
        const response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let { email, login, id } = response.data.data
            dispatch(setAuthUserData(email, login, id, true))
        }
    }
}

const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrl(captchaUrl));
    }
}

const logoutThunk = () => {
    return async (dispatch: any) => {
        const response = await authAPI.logout()
        debugger
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}


export { authUser, setAuthUserData, setAuthUserDataThunk, loginThunk, logoutThunk, getCaptchaThunk };