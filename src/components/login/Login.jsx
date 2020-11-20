import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunk } from '../../redux/authentication-reducer';
import { FormComponent } from '../utils/FormsControls';
import { maxLength, required } from '../utils/Validators';
import './Login.css';


const InputElem = FormComponent('input');
const maxLength30 = maxLength(30);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to='/profile' />
    }

    return (
    <div className='login'>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}


const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <Field placeholder='email' name='email' component={InputElem} validate={[required, maxLength30]}/>
        <Field placeholder='password' name='password' type='password' component={InputElem} validate={[required, maxLength30]}/>
        Запомнить меня
        <Field type="checkbox" name='rememberMe' component={InputElem}/>
        {props.error && <div className='login-form__error'>{`${props.error} !!!`}</div>
        }
        <button className='btn'>Войти</button>
    </form>)
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => {
    return {
        isAuth: state.authUser.isAuth
    }
}

export default connect(mapStateToProps, {loginThunk})(Login);