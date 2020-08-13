import React from 'react';
import styles from './ProfilePage.module.sass';
import fieldCreator from '../../../../utils/fieldCreator';
import { Element } from '../../../../elements/Forms';
import { reduxForm } from 'redux-form';

export const ProfileInfo = ({ profile, isOwner, activateEditMode }) => {
    return (
        <>
            <div className={styles.prof__wrap}>
                <span className={styles.prof__name}> {profile.fullName} </span>
            </div>
            <div className={styles.prof__info} >
                <span>Looking for a job:</span> {profile.lookingForAJob ? <span>yes</span> : <span>no</span>}
            </div>
            {profile.lookingForAJob &&
                <div className={styles.prof__info}>
                    <span>My Professional Skills</span>: {profile.lookingForAJobDescription}
                </div>
            }
            <div className={styles.prof__info}>
                <span>About me:</span> {profile.aboutMe}
            </div>
            <div className={styles.prof__info}>
                <div className={styles.prof__contactsTitle} >-Contacts-</div> <br /> {Object.keys(profile.contacts).map(key => <ProfileContacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />)}
            </div>
            {(isOwner) && <button className={styles.form__button} onClick={() => activateEditMode()} >Edit Profile</button>}
            
        </>
    )
}
const Input = Element("input");
const Texarea = Element("textarea");
export const ProfileInfoEdit = ({ handleSubmit, editProfileInfo, profile , error}) => {
    // {fieldCreator(styles.form__input, "password", "password", Input, [required, maxLength15], "password")}
    return (
        <form onSubmit={handleSubmit} >
            <div className={styles.prof__wrap}>
                <span className={styles.prof__name}> {profile.fullName} </span>
                {fieldCreator(styles.form__input, "Change new name", "fullName", Input, [], "input",)}
            </div>
            <div className={styles.prof__info} >
                <span>Looking for a job:</span> {fieldCreator("", "", "lookingForAJob", Input, [], "checkbox",)}
            </div>
            <div className={styles.prof__info}>
                <span>My Professional Skills</span>:
                {fieldCreator(styles.form__textarea, "Skills", "lookingForAJobDescription", Texarea, [], "textarea",)}
            </div>
            <div className={styles.prof__info}>
                <span>About me:</span>
                {fieldCreator(styles.form__textarea, "About me", "aboutMe", Texarea, [], "textarea",)}
            </div>
            <div className={styles.prof__info}>
                <div className={styles.prof__contactsTitle} >-Contacts-</div> <br /> 
                {Object.keys(profile.contacts).map(key => <div> 
                    <span> {key}: {fieldCreator(styles.form__input, key, `contacts.${key}`, Input, [], "input",)} </span></div> )}
            </div>
            <button className={styles.form__button} onClick={editProfileInfo}>Save</button>
            {error && <div>{error}</div>}
        </form>
    )
}

const ReduxEditProfileForm = reduxForm({ form: "edit-profile" })(ProfileInfoEdit)

const ProfileContacts = ({ contactsTitle, contactsValue }) => {
    return (
        <>
            <span>{contactsTitle}: </span> {contactsValue} <br />
        </>
    )
}
export default ReduxEditProfileForm;