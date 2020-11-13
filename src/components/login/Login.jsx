import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './Login.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div className='login'>
        <h1>login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field placeholder='login' name='login' component='input'/>
        <Field placeholder='password' name='password' component='input'/>
        Запомнить меня
        <Field type="checkbox" name='rememberMe' component='input'/>
        <button>Войти</button>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;