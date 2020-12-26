import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import './index.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers';

ReactDOM.render(<Application />, document.getElementById('root'));
