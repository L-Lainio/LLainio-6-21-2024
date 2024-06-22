import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navigation from './components/Navigation';
import './index.css';

import { createRoot } from 'react-dom/client';
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

ReactDOM.render(
    React.createElement(
        React.StrictMode,
        null,
        React.createElement(App, null),
        React.createElement(NavigationBar, null)
    ),
    document.getElementById('root')
);
