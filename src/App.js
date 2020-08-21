import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';

const App = (props) => {
    return (
            <div className="App">
                <Header />

                <div className="wrap-navbar-content container">
                    <Navbar />

                    <Route path='/dialogs' 
                        render={() => {
                            return (<DialogsContainer />)
                        }
                    }/>
                    <Route path='/profile' 
                        render={() => {
                            return (<Profile />)
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
