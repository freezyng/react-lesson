import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';


let mapAvatarToProps = (state) => {
    return {
        avatar: state.profilePage.myAvatarURL
    };
}

let ProfileInfoContainer = connect(mapAvatarToProps)(ProfileInfo)

export default ProfileInfoContainer;