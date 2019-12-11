import { Provider } from 'react-redux';
import React from 'react';
import SignUpForm from './session_forms/sign_up_form';
import LoginForm from './session_forms/login_form';
import SplashNavContainer from './splash_nav/splash_nav_container';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />
        <header>
            <nav className='nav'>
                <div className='left'>
                    <h2>MystiCamp</h2>
                </div>
                <div className='right'>
                    <ul className='menu'>
                        <li>Near Me</li>
                        <li>Become a Host</li>
                        <li>About</li>
                        <li>Earn Hipcash</li>
                    </ul>
                    <div className='splash-nav-container'>
                        <SplashNavContainer />
                    </div>
                </div>
            </nav>
            <h1>Find yourself outside.</h1>
        </header>
        <Switch>
            {/* <AuthRoute exact path='/login' component={LoginForm} />
            <AuthRoute exact path='/signup' component={SignUpForm} /> */}
        </Switch>
    </div>
)

export default App;