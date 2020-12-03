import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import { authUser } from './authentication-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { appReducer } from './app-reducer';


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    authUser: authUser,
    appPage: appReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunk))));



window.store = store;

export default store;