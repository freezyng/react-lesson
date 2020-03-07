import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__menu">
                    <div className="header__link link-item">поиск</div>
                    <div className="header__link link-item">вход</div>
                    <div className="header__link link-item">регистрация</div>
                    <div className="header__link link-item">настройки</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
