import React from 'react';
import StoreContext from '../../../StoreContext';
import ProfileInfo from './ProfileInfo';


const ProfileInfoContainer = (props) => {

    return <StoreContext.Consumer>
        {   (store) => {
                let avatar = store.getState().profilePage.myAvatarURL;

                return ( <ProfileInfo
                    avatar={avatar}
                /> )
            }
        }
        </StoreContext.Consumer>
}


export default ProfileInfoContainer;