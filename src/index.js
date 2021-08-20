import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';

import App from './Containers/App'
import { forbiddenWordsMiddleware } from './Middlewares/forbiddenWordsMiddleware';
import { rootReducer } from './redux/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    forbiddenWordsMiddleware,
    thunk,
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

saga.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
