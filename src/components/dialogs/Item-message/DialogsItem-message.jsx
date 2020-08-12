import React from 'react';
import { NavLink } from 'react-router-dom';


const DialogsItem = (props) => {
    return(
        <NavLink to={"/dialogs/" + props.id}  className="person__name navbar__link link-item">
            {props.name}
        </NavLink>
    );
}
  
const DialogsMessage = (props) => {
    return(
        <div className="dialogs__message">
            {props.message}
        </div>
    );
}

export {DialogsItem, DialogsMessage};