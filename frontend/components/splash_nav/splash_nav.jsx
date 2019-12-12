import React from 'react';
// import { Link } from 'react-router-dom';


const SplashNav = ({currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <nav className='splash-nav-container-buttons'>
            {/* <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link> */}
            <button className='log-in-button'onClick={() => openModal('login')}>Log in</button>
            <br/>
            <button className='sign-up-button' onClick={() => openModal('signup')}>Sign up</button>
        </nav>
    );

    const loggedInNav = () => (
        <nav className='logged-in-nav'>
            <button onClick={logout}>Log Out</button>
        </nav>
    );
    return currentUser ? loggedInNav() : sessionLinks();
};
export default SplashNav