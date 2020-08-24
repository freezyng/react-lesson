import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <div className="navbar__link link-item">
                    <NavLink to='/profile'>Профиль</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/dialogs'>Диалоги</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/users'>Список пользователей</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/music'>Музыка</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/news'>Новости</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
