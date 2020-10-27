import React from 'react';
import Profile from './Profile';
import './Profile.css';
import { connect } from 'react-redux';
import { getProfileThunk, getStatus, updateStatus } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 11374;
        }
        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);
    }
    

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
       profile: state.profilePage.profile,
       status: state.profilePage.status

    }
}


export default compose(
    connect(mapStateToProps, {getProfileThunk, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)