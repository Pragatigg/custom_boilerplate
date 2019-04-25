import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from 'CONTAINERS/App';

/***********************************************
* Render setup
************************************************/
const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
