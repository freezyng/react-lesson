import React from 'react';
import './ProfileDataForm.css';
import { FormComponent } from '../../utils/FormsControls';
import { Field, reduxForm } from 'redux-form';


const textareaElem = FormComponent('textarea');
const inputElem = FormComponent('input');

const ProfileDataForm = (props) => {

    return (
        <div className="profile__description">
            <div className="profile__fullName">
                <h2>{props.profile.fullName}</h2>
            </div>
            <form className="profile__data-form" onSubmit={props.handleSubmit}>
                <div>
                    Имя:
                    <Field placeholder='...' name='fullName' component={inputElem} />
                    <br />
                    Обо мне:
                    <Field placeholder='...' name='aboutMe' component={textareaElem} />
                    <br />
                    В поисках работы:
                    <Field placeholder='...' name='lookingForAJob' type='checkbox' component={inputElem} />
                    <br />
                    Навыки:
                    <Field placeholder='...' name='lookingForAJobDescription' component={textareaElem} />
                </div>
                <div>
                    <button className="btn btn-profile-data">Сохранить</button>
                    Мои контакты:
                    {props.profileSocialContacts.map((c) => {
                        return <div key={c.name}>  {c.name} <Field placeholder={c.link} name={`contacts.${c.name}`} component={inputElem} /></div>
                    })
                    }
                </div>
            </form>
        </div>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'ProfileDataForm' })(ProfileDataForm);


export default ProfileDataReduxForm;