import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__menu">
                    <div className="header__link link-item">поиск</div>
                    {
                        props.isAuth ? props.login
                            :<NavLink to='/login' className="header__link link-item">вход</NavLink>
                    }
                    <NavLink to='/' className="header__link link-item">регистрация</NavLink>
                    <NavLink to='/' className="header__link link-item">настройки</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;
