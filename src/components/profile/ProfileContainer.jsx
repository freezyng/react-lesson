import React from 'react';
import Profile from './Profile';
import './Profile.css';
import { connect } from 'react-redux';
import { getProfileThunk, getStatus, updateStatus, savePhoto } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    updateProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.meUserId;
            if(!userId){
                userId = this.props.history.push('/login');
            }
        }
        
        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.updateProfile()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props} 
            isOwner={!this.props.match.params.userId}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        meUserId: state.authUser.userId,
        isAuth: state.authUser.isAuth
    }
}


export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatus, updateStatus, savePhoto}),
    withRouter
)(ProfileContainer)