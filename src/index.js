import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './components/main';

import {Provider} from 'react-redux';
import store from './store';


import './assets/styles/bootstrap.min.css';
import './assets/styles/fontawesome.min.css';
import './assets/styles/style.css';
import './assets/styles/responsive.css';
import './assets/styles/animate.min.css';
import './assets/styles/slick.css';
import './assets/styles/style.css';


const Root =() => (
    <Provider store={store}>
        <Router>
            <Switch>
                 <Route component={Main} path="/"></Route>
            </Switch>
        < /Router>
    </Provider>

)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
