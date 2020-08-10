import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile/Profile.jsx';
import DialogsContainer from './components/dialogs/DialogsContainer.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}


export default App;
