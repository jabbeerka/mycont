import React from 'react';
import styles from './Header.module.sass';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        let { isAuth, userId, login, userLogout } = this.props
        return (
            <div className={styles.header}>
                <img src={logo} className={styles.logo} alt="header" />
                <div className={styles.login_block}>
                    {isAuth ?
                        <NavLink to={'/profile/' + userId}> {login} <button onClick={userLogout}
                            className={styles.login_block_btn} >Logout</button>
                        </NavLink> :
                        <NavLink to={'/login'}> Login </NavLink>
                    }
                </div>
            </div>
        )
    }
}

export default Header;