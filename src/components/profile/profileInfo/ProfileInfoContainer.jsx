import React from 'react';
import StoreContext from '../../../StoreContext';
import ProfileInfo from './ProfileInfo';


const ProfileInfoContainer = (props) => {

    return(
        <StoreContext.Consumer>
        { (store) => {  
            let state = store.getState();
            
            return ( <ProfileInfo
                state={state}
                avatar={state.profilePage.myAvatarURL}
            /> )
            }
        }
        </StoreContext.Consumer>
    )
}


export default ProfileInfoContainer;