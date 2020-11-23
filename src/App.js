import React from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import preLoader from './assets/images/usersPreloader.svg';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        
        if(!this.props.initialized) {
            return <div className='app__preloader'>{ <img src={preLoader} alt='1'/>}</div>
        }

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
                        <Route path='/login' 
                            render={() => {
                                return (<Login />)
                            }
                        }/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.appPage.initialized
    }
}

export default connect(mapStateToProps, { initializeApp } )(App);
