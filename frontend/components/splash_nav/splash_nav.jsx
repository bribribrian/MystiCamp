import React from 'react';
import { Link } from 'react-router-dom';

const SplashNav = ({currentUser, logout}) => {
    const sessionLinks = () => (
        <nav>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
        </nav>
    );

    const loggedInNav = () => (
        <nav>
            <button onClick={logout}>Log Out</button>
        </nav>
    );
    return currentUser ? loggedInNav() : sessionLinks();
};
export default SplashNav