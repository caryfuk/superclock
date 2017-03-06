import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Typography from 'typography';
import deYoungTheme from 'typography-theme-de-young';
import './index.css';

deYoungTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
  'h1, h2, h3, h4, h5, h6, p, li, select, option': {
    color: '#eee'
  }
});

const typography = new Typography(deYoungTheme);
typography.injectStyles();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
