// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactGA from 'react-ga';
// Components
import App from './components/App';
// Stylesheets
import './css/index.css';
import reportWebVitals from './reportWebVitals';
// Translation
import './i18n.js';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactGA.initialize('G-7NDYD7PVWW'); 
ReactGA.pageview(window.location.pathname + window.location.search);
reportWebVitals();
