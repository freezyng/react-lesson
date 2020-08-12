import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import DialogsContainer from './components/dialogs/DialogsContainer.jsx';
import { Route } from 'react-router-dom';

const App = (props) => {
    return (
            <div className="App">
                <Header />

                <div className="wrap-navbar-content container">
                    <Navbar />

                    <Route path='/dialogs' render={() => {
                        return (<DialogsContainer />)
                        }
                    }/>
                    <Route path='/profile' render={() => {
                        return (<Profile />)
                        }
                    }/>
                </div>
            </div>
    );
}


export default App;
