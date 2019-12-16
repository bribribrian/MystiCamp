import { Provider } from 'react-redux';
import React from 'react';
import SignUpForm from './session_forms/sign_up_form';
import LoginForm from './session_forms/login_form';
import SplashNavContainer from './splash_nav/splash_nav_container';
import { Switch, Route} from 'react-router-dom';
// import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingIndex from './listings/listing_container';
import ListingShowContainer from './listing_show/listing_show_container';

const App = () => (
    <div>
        <Modal />
        <header>
            <nav className='nav'>
                <div className='left'>
                    <a className='logo' href='/'>MystiCamp</a>
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
            <div className='content'>
                <h1>Find yourself outside.</h1>
            </div>
        </header>
        <Switch>
            <Route exact path='/' component={ListingIndex} />
            <Route exact path='/listings/:listingId' component={ListingShowContainer} />
        </Switch>
        <footer>
            <div className='footer'>

            <div className='footer-space'></div>
                <nav className='footer-nav'>
                    <div className='footer-left'>
                        <div className='footer-left-container'>
                        <div>MystiCamp</div>
                        <div className='footer-text-small'> by Brian Klein</div>
                        </div>
                        <div className='footer-text'>Terms of Service</div>
                        <div className='footer-text'>Privacy Policy</div>
                    </div>
                    <div className='footer-right'>
                        <div className="footer-icons">
                        <i className="fab fa-github-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-angellist"></i>
                        </div>
                        
                    </div>
                </nav>
            <div className='footer-space'></div>
            </div>
        </footer>
    </div>
)

export default App;