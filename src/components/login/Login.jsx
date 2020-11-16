import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormComponent } from '../utils/FormsControls';
import { maxLength, required } from '../utils/Validators';
import './Login.css';


const InputElem = FormComponent('input');
const maxLength30 = maxLength(30);

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
        <Field placeholder='login' name='login' component={InputElem} validate={[required, maxLength30]}/>
        <Field placeholder='password' name='password' component={InputElem} validate={[required, maxLength30]}/>
        Запомнить меня
        <Field type="checkbox" name='rememberMe' component={InputElem}/>
        <button>Войти</button>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;