import React from 'react';
import styles from './MyStatus.module.sass';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = ({ status, updateStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [localStatus, setLocalStatus] = useState(status);
  useEffect(() => {
    setLocalStatus(status);
  }, [status]);

  const activeEditMode = () => {
    setEditMode(true);
  }
  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(localStatus);
  }
  const onChangeStatus = (e) => {
    setLocalStatus(e.currentTarget.value);
  }
  return (
    <>
      {editMode ?
        <div>
          <div onClick={activeEditMode} className={styles.status__text} ><span>Status:</span> {status || "________"}</div>
        </div> :
        <div>
          <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} value={localStatus} type="text" className={styles.status__inputArea} />
        </div>
      }
    </>
  )
}
export default ProfileStatusWithHooks;