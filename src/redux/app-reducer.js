import { setAuthUserDataThunk } from "./authentication-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
} 

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }

}

const initializedSuccess = () => {
    return {type: INITIALIZED_SUCCESS}
}

const initializeApp = () => {
    return (dispatch) => {
        dispatch(setAuthUserDataThunk()).then(() => {
            dispatch(initializedSuccess())
        })
    }
}


export  { appReducer, initializeApp };