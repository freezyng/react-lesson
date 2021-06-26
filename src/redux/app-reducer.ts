import { setAuthUserDataThunk } from "./authentication-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

type initialStateType = {
    initialized: boolean
} 
let initialState: initialStateType = {
    initialized: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
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

type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
const initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED_SUCCESS})

const initializeApp = () => {
    return (dispatch: any) => {
        Promise.all([dispatch(setAuthUserDataThunk())])
            .then(() => {
                dispatch(initializedSuccess())
        })
    }
}


export  { appReducer, initializeApp };