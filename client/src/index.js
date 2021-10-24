import React from 'react';
import './index.css'
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { getConfig } from "./config";
import history from "./helpers/history";
import configureStore from './redux';
import { Provider } from 'react-redux';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Provider store={configureStore()}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
