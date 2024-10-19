import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@asgardeo/auth-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const config = {
  signInRedirectURL: "http://127.0.0.1:5173/",
  signOutRedirectURL: "http://127.0.0.1:5173/",
  clientID: "QVU3E0_PM1hdl3RpHwFUNjc_yFAa",
  baseUrl: "https://api.asgardeo.io/t/engineclinic",
  scope: [ "openid","profile" ]
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider config={ config }>
      <App />
    </AuthProvider>
  </StrictMode>
);
