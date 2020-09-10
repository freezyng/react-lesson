import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';

const App = (props) => {
    return (
            <div className="App">
                <HeaderContainer />

                <div className="wrap-navbar-content container">
                    <Navbar />

                    <Route path='/dialogs' 
                        render={() => {
                            return (<DialogsContainer />)
                        }
                    }/>
                    <Route path='/profile/:userId?' 
                        render={() => {
                            return (<ProfileContainer />)
                        }
                    }/>
                    <Route path='/users' 
                        render={() => {
                            return (<UsersContainer />)
                        }
                    }/>
                </div>
            </div>
    );
}


export default App;
