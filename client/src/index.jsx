import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import '../dist/styles/index.scss';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
    domain="flamingo-tonhil.us.auth0.com"
    clientId="8f1Js3pd0s5GgPVkZfjcqNP0C5xYT6uO"
    redirectUri={window.location.origin}
  >
        <App projectName="flaminGo" />
    </Auth0Provider>
, document.getElementById('app'));