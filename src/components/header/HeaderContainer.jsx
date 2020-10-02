import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/authentication-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then( (response) => {
                if(response.data.resultCode === 0){
                    let {email, login, id} = response.data.data
                    this.props.setAuthUserData(email, login, id);
                }
        });
    }

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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);