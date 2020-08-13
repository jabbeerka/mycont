import React, { useState } from 'react';
import styles from './ProfilePage.module.sass';
import Preloader from '../../../../elements/Preloader';
import avatar from '../../../../images/users-avatar.png';
import ProfileStatus from '../ProfileStatus';
import ProfileInfoEdit, { ProfileInfo } from './ProfileInfo';

const ProfilePage = ({ profile, status, updateStatus, isOwner, setPhoto, saveProfileInfo }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }
  const onPhothoChanged = (e) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  }
  const onSubmit = (formdata) => {
    saveProfileInfo(formdata).then(()=> {
      setEditMode(false);
    })
  }
  return (
    <section className={styles.prof}>
      <div className={styles.prof__avatar_wrap} >
        <img src={profile.photos.large || avatar} alt="avatar" className={styles.prof__avatar} />
        <input type="file" onChange={onPhothoChanged} className={styles.prof__avatar_change} name="file" id="file" />
        {(isOwner) ? <label htmlFor="file">Set photo</label> : ""}
      </div>
      <div className={styles.prof__info}>
        <ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
        {editMode ? <ProfileInfoEdit initialValues={profile} onSubmit={onSubmit} profile={profile} /> : <ProfileInfo profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)} />}
      </div>
    </section>
  )
}

export default ProfilePage;