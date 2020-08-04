import React from 'react';
import styles from './MyStatus.module.sass';
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activeEditMode = () => {
            setEditMode(true);
        }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <>
          {editMode ?
          <div>
            <div onClick={activeEditMode} className={styles.status__text} ><span>Status:</span> {props.status || "________"}</div>
          </div> :
          <div>
            <input onChange={onChangeStatus} autoFocus={true} onBlur={deactivateEditMode} value={status } type="text" className={styles.status__inputArea}/>
          </div>
          }
        </>
      )
}
export default ProfileStatusWithHooks;