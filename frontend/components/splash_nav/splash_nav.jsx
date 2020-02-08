import React from 'react';


const SplashNav = ({currentUser, logout, openModal, errors, clearSessionErrors}) => {
    let errorsClass = 'noErrors';
    if (errors.length > 0) {
        errorsClass = 'presentErrors';
        setTimeout(clearSessionErrors, 5000);
    }
    const sessionLinks = () => (
        <nav className='splash-nav-container-buttons'>
            <button className='log-in-button'onClick={() => openModal('login')}>Log in</button>
            <br/>
            <button className='sign-up-button' onClick={() => openModal('signup')}>Sign up</button>
            {/* <span className={errorsClass}>{errors}</span> */}
        </nav>
    );

    const loggedInNav = () => (
        <nav className='logged-in-nav'>
            <div className='dropdown'>
                <button className='logged-in-dropdown-button'>Menu</button>
                    <div className='dropdown-menu'>
                        <ul className='dropdown-list-items'>
                            <li><a className='logout-button' onClick={logout}>Log out</a></li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
    return currentUser ? loggedInNav() : sessionLinks();
};
export default SplashNav