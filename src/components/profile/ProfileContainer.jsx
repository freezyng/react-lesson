import React from 'react';
import Profile from './Profile';
import './Profile.css';
import { connect } from 'react-redux';
import { getProfileThunk } from './../../redux/profile-reducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 11374;
        }
        this.props.getProfileThunk(userId);
    }

    render() {
        if(!this.props.isAuth){
            return <Redirect to='/login'/>
        }

        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
       profile: state.profilePage.profile,
       isAuth: state.authUser.isAuth
    }
}

let WithUrlDataComponentContainer =  withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileThunk})(WithUrlDataComponentContainer);