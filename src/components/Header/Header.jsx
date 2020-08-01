import React from 'react';
import styles from './Header.module.sass';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <img src={logo} className={styles.logo} alt="header" />
                <div className={styles.login_block}>
                    { this.props.isAuth ? 
                    <NavLink to={'/profile/' +this.props.userId }> {this.props.login} <button onClick={this.props.userLogout} 
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