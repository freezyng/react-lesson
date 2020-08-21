import {createStore, combineReducers} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {usersReducer} from './users-reducer';


let redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(redusers);

window.store = store;

export default store;