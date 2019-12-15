import { Provider } from 'react-redux';
import React from 'react';
import SignUpForm from './session_forms/sign_up_form';
import LoginForm from './session_forms/login_form';
import SplashNavContainer from './splash_nav/splash_nav_container';
import { Switch, Route} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingIndex from './listings/listing_container';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <nav className='nav'>
                <div className='left'>
                    <div className='logo'>MystiCamp</div>
                </div>
                <div className='right'>
                    <ul className='menu'>
                        <li><a>Near Me</a></li>
                        <li><a>Become a Host</a></li>
                        <li><a>About</a></li>
                        <li><a>Earn Hipcash</a></li>
                    </ul>
                    <div className='splash-nav-container'>
                        <SplashNavContainer />
                    </div>
                </div>
            </nav>
            <h1>Find yourself outside.</h1>
        </header>
        <Switch>
            <Route exact path='/' component={ListingIndex} />
            <Route exact path='/listings/:listingId' component={ListingShowContainer} />
        </Switch>
    </div>
)

export default App;