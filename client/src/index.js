import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { getConfig } from "./config";
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
  window.history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

//const config = getConfig();

 const providerConfig = {
//   domain: config.domain,
//   clientId: config.clientId,
//   ...(config.audience ? { audience: config.audience } : null),
//   redirectUri: window.location.origin,
//   onRedirectCallback,
 };

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
);

reportWebVitals();
