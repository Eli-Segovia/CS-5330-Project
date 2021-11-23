import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/index.css';
import './styles/sass/index.scss';
import App from './components/App';

ReactDOM.render(
    React.createElement(BrowserRouter, null, React.createElement(App, null)),
    document.getElementById('root')
);
