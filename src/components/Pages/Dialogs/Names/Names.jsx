import React from 'react';
import styles from './Names.module.sass';
import { NavLink } from 'react-router-dom';
import avatar from '../../../../images/nav-bar-profile-icon.png'

const Names = ({ name, id }) => {
    let path = "/dialogs/" + id;
    return (
        <NavLink to={path} className={styles.dialogs__name} activeClassName={styles.dialogs__name_active}>
            <img src={avatar} alt="avatar" className={styles.dialogs__name_avatar} />
            <li>{name}</li>
        </NavLink>
    )
}
export default Names;