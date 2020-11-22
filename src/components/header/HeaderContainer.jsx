import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunk } from './../../redux/authentication-reducer';

class HeaderContainer extends React.Component {


    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth,
        login: state.authUser.login
    }
}

export default connect(mapStateToProps, { logoutThunk })(HeaderContainer);