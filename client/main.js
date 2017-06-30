import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import HeadApp from './components/HeadApp.jsx';
import Lab1 from './components/Lab1.jsx';
import Lab2 from './components/Lab2.jsx';
import App from './components/App.jsx';
import AboutPage from './components/AboutPage.jsx';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exect path='/' component={HeadApp} />
            <Route path='/lab1' component={Lab1} />
            <Route path='/lab2' component={Lab2} />
            <Route path='/lab3' component={App} />
            <Route path='/about' component={AboutPage} />
        </div>
    </BrowserRouter>
    ),
    document.getElementById('mount-point')
);
