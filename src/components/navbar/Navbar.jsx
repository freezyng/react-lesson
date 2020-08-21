import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <div className="navbar__link link-item">
                    <NavLink to='/profile'>профиль</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/dialogs'>диалоги</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/music'>музыка</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/news'>новости</NavLink>
                </div>
                <div className="navbar__link link-item">
                    <NavLink to='/users'>поиск пользователя</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
