import { UsernameInput } from "@components/inputs/UsernameInput";
import GoogleSignIn from "./GoogleSignIn";
import LoadingBox from "./LoadingBox";
import React, { useEffect } from "react";
import authRepository from "../repository/auth.repository";
import logger from "../utils/Logger";
import EmailOtpLogin from "./EmailOtpLogin";

function LoginBox() {
  // Login Box State
  const [authToken, setAuthToken] = React.useState<string | null>(null);

  // Fetch Auth Token From Server On Mount
  useEffect(() => {
    fetchAndSetAuthToken(setAuthToken);
  }, []);

  if (!authToken) {
    return <LoadingBox></LoadingBox>;
  }

  return (
    <React.Fragment>
      <div className="flex w-100% justify-center align-center">
        <div className="login-box mt-8px p-3rem px-40px py-40px desk:p-3.75rem desk:px-60px desk:py-56px w-100% desk:w-46% bg-white mw-500px br-4px">
          <h5 className="mb-20px text-center">Login</h5>

          <EmailOtpLogin authCode={authToken}></EmailOtpLogin>

          <div className="or-section">
            <span className="or-text">Or</span>
          </div>

          <div className="mt-25px">
            <GoogleSignIn></GoogleSignIn>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const fetchAndSetAuthToken = async (
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const authCode = await authRepository.getAuthCode();
  logger.debug(`AuthCode Fetched From Server: ${authCode}`);
  if (authCode) setAuthToken(authCode);
};

export default LoginBox;