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
import SearchBarContainer from './search_bar/search_bar_container';
import DiscoverContainer from './discover/discover_container';

const App = () => (
    <div className='app'>
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
        </header>
        <Route exact path='/' component={SearchBarContainer} />
        <Route exact path='/' component={ListingIndex} />
        <Switch>
            <Route exact path='/listings/:listingId' component={ListingShowContainer} />
            <Route path="/discover/" component={DiscoverContainer} />
        </Switch>
        <footer>
        <div className='pre-footer'>
                    <div>
                        <div>prefooter content</div>
                        <div>prefooter content</div>
                    </div>
                    <div>prefooter content</div>
                </div>
            <div className='footer'>
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
                        <a href='https://github.com/bribribrian'><i className="fab fa-github-square"></i></a>
                        <a href='https://angel.co/bribribrian'><i className="fab fa-linkedin"></i></a>
                        <a href='https://www.linkedin.com/in/brian-klein-a5a400129/'><i className="fab fa-angellist"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    </div>
)

export default App;