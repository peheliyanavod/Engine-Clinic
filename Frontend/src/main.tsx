import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Auth0Provider} from '@auth0/auth0-react';

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider 
    domain="dev-dpdgpf002ca46gzp.uk.auth0.com" 
    clientId="aQwkbSmWPd5PoQ7VC0XCGPLUyxrGcv53" 
    authorizationParams={{ redirect_uri: window.location.origin }}
    audience = "This is the unique identifier"
    scope = "openid profile email"
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
)

