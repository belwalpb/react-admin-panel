import {store} from "@store/index";
import logger from "@utils/Logger";
import type {RootState} from "@store/index";
import { Authentication } from "@app-types/AuthTypes";
import Router  from 'next/router';
import ApplicationConstants from "@const/ApplicationConstants";

function AuthenticationChangeEventHandler() {

    let currentAuthState: Authentication|null = null;
    const handleChange = () => {
        let prevAuthStateValue = currentAuthState;
        currentAuthState = extractAuthState(store.getState());

        if(currentAuthState !== prevAuthStateValue) {
            logger.debug('Authentication State Changed');
            // Handle Authentication Changed Event Here
            // If New State is Authenticated, then redirect to home page.
            if(currentAuthState.isAuthenticated) {
                if(Router.pathname === ApplicationConstants.LOGIN_URL_PATH) {
                logger.debug('Redirecting to Home Page');
                Router.push(ApplicationConstants.HOMEPAGE_URL_PATH);
                }
            }
            else {
                logger.debug('Redirecting to Login Page');
                Router.push(ApplicationConstants.LOGIN_URL_PATH);
            }
        }
        
    }
     store.subscribe(handleChange);
  return null;
}

function extractAuthState(state: RootState) {
    return state.auth;
  }

export default AuthenticationChangeEventHandler;