import React from 'react';
import styles from './Names.module.sass';
import { NavLink } from 'react-router-dom';

const Names = ({name, id}) => {
    let path = "/dialogs/" + id;
    return (
        <NavLink to={path} className={styles.dialogs__name} activeClassName={styles.dialogs__name_active}>
            <li>{name}</li>
        </NavLink> 
    )
}
export default Names;