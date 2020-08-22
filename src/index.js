import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import './tailwind.output.css';
import { ToastProvider } from 'react-toast-notifications'
import * as serviceWorker from './serviceWorker';

import AppRouter from './router/AppRouter';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ToastProvider
        placement="top-center"
        autoDismiss={true}
      >
        <AppRouter />
      </ToastProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
