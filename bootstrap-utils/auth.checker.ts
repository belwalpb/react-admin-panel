import ApplicationConstants from "@const/ApplicationConstants";
import AuthRepository from "@repository/auth.repository";
import { AuthCheckerResponse, User } from "@app-types/AuthTypes";
import jwtUtils from "@utils/JwtUtils";
import logger from "@utils/Logger";

// The Auth Checker Function will be called during bootstrap at client side.
// It will determine the authentication status of the user.
// If the user is authenticated, it will return the user data as well with refresh and access token.
export async function initialCheckupForAuth(): Promise<AuthCheckerResponse> {
  const refreshToken = localStorage.getItem(ApplicationConstants.REFRESH_TOKEN_KEY);

  if (!refreshToken) {
    logger.debug(`No Refresh Token Found On LocalStorage.`);
    return { isAuthenticated: false };
  }
  // Otherwise Obtain a new access token from the refresh token.
  const authTokenRes = await AuthRepository.getAccessToken(refreshToken);

  if (!authTokenRes) {
    logger.debug(`Unable to Fetch New Access Token From Refresh Token. Logging Out User.`);
    clearUserStorage();
    return { isAuthenticated: false };
  }

  logger.debug(`Successfully Retrieved Access Token From Refresh Token.`);
  const { accessToken } = authTokenRes;
  const decodedToken: User | null =
    jwtUtils.decodeToken<User>(accessToken);

  // If the token is invalid, clear the user storage.
  if (!decodedToken) {
    logger.debug(`Invalid Access Token Received.`);
    clearUserStorage();
    return { isAuthenticated: false };
  }

  // If Token is Issued to Some Other Application then  Clear the User Storage.
  if (decodedToken.aud !== ApplicationConstants.CLIENT_ID) {
    logger.debug(`Access Token is not applicable to this client. Logging Out.`);
    clearUserStorage();
    return { isAuthenticated: false };
  }

  logger.debug(`Successfully Decoded Access Token. Setting Authentication.`);
  return {
    isAuthenticated: true,
    accessToken,
    refreshToken,
    user: decodedToken,
  };
}

// Clear the User Storage Completely.
export function clearUserStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
