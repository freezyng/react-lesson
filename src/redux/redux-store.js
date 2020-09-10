import {createStore, combineReducers} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';
import { authUser } from './authentication-reducer';


let redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    authUser: authUser
});

let store = createStore(redusers);

window.store = store;

export default store;