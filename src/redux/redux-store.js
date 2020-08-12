import {createStore, combineReducers} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';


let redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
});

let store = createStore(redusers);

export default store;