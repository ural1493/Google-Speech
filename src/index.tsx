import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './core/i18n/i18n';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyled from './globalStyled';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled />
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
