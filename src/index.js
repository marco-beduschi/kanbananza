import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

import Application from './components/Application';

import './index.scss';

import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Application />
  </ReduxProvider>,
  document.getElementById('root'),
);
