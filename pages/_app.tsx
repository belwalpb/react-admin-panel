import "../styles/index.scss";
import type { AppProps } from "next/app";
import "uno.css";
import { Provider } from "react-redux";
import { store } from "../store";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LoadingPageComponent from "../components/LoadingPageComponent";
import AuthenticationChangeEventHandler from "../components/AuthenticationChangeEventHandler";
import { initialCheckupForAuth } from "../bootstrap-utils/auth.checker";
import {setAuthentication} from "../store/slices/authSlices";
import { User } from "../types/AuthTypes";
import logger from "../utils/Logger";
import Router  from 'next/router';
import ApplicationConstants from "../constants/ApplicationConstants";

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setClient] = useState(false);

  useEffect(() => {
    
    setupIntialAuthentication(setClient)}, []);

  if (!isClient) {
    return <LoadingPageComponent></LoadingPageComponent>;
  }
  return (
    <Provider store={store}>
      <AuthenticationChangeEventHandler></AuthenticationChangeEventHandler>
      <Component {...pageProps} />
    </Provider>
  );
}

const setupIntialAuthentication = async (setClient:Dispatch<SetStateAction<boolean>>) => {
  const authRes = await initialCheckupForAuth();

  if(authRes.isAuthenticated) {
    // Set Auth State.
    store.dispatch(setAuthentication({
      isAuthenticated: true,
      accessToken: authRes.accessToken as string,
      refreshToken: authRes.refreshToken as string,
      user: authRes.user as User
    }));
    // If Current User is Login Page, then Redirect to Home Page.
    logger.debug('Redirecting to Home Page');
    if(Router.pathname === ApplicationConstants.LOGIN_URL_PATH) {
    await Router.push('/');
    }
}
else {
  logger.debug('Redirecting to Login Page');
  await Router.push(ApplicationConstants.LOGIN_URL_PATH);
}
setClient(true);
}

export default MyApp;
