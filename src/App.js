import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import Dialogs from './components/dialogs/Dialogs.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />

                <div className="wrap-navbar-content container">
                    <Navbar />

                    <Route path='/dialogs' render={() => {
                        return (<Dialogs dialogsData={props.state.dialogsPage.dialogsData} 
                            dialogsMessage={props.state.dialogsPage.dialogsMessage}
                            newMessageText={props.state.dialogsPage.newMessageText}
                            dispatch={props.dispatch} />)
                        }
                    }/>
                    <Route path='/profile' render={() => {
                        return (<Profile myPostsMessage={props.state.profilePage.myPostsMessage}
                            dispatch={props.dispatch}
                            newPostText={props.state.profilePage.newPostText}
                            />)
                        }
                    }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
