import { Provider } from 'react-redux';
import React from 'react';
import SignUpForm from './session_forms/sign_up_form';
import LoginForm from './session_forms/login_form';
import SplashNavContainer from './splash_nav/splash_nav_container';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>MystiCamp</h1>
            <h2>Find yourself outside.</h2>
            <SplashNavContainer />
        </header>
        <Switch>
            <AuthRoute exact path='/login' component={LoginForm} />
            <AuthRoute exact path='/signup' component={SignUpForm} />
        </Switch>
    </div>
)

export default App;