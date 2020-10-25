import React from 'react';
import Profile from './Profile';
import './Profile.css';
import { connect } from 'react-redux';
import { getProfileThunk } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 11374;
        }
        this.props.getProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
       profile: state.profilePage.profile
    }
}


export default compose(
    connect(mapStateToProps, {getProfileThunk}),
    withRouter
)(ProfileContainer)