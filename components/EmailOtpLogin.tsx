import React, { useState } from "react";
import authRepository from "@repository/auth.repository";
import { AuthCodeProp } from "@app-types/AuthProps";
import { getNumber } from "@utils/ApplicationUtils";
import logger from "@utils/Logger";
import { OtpInput } from "@components/inputs/OtpInput";
import { UsernameInput } from "@components/inputs/UsernameInput";
import {setAuthentication} from "@store/slices/authSlices";
import { useDispatch } from 'react-redux'
import ApplicationConstants from "@const/ApplicationConstants";
import jwtUtils from "@utils/JwtUtils";
import { User } from "@app-types/AuthTypes";

function EmailOtpLogin(props: AuthCodeProp) {
  const [username, setUsername] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpId, setOtpId] = useState<string|null>(null);

  const dispatch = useDispatch();

  // Function to reset component's initial state.
  const resetComponent = () => {
    setUsername("");
    setIsOtpSent(false);
    setOtp("");
    setOtpId(null);
  }

  //Function to send OTP to user's email.
  const sendOtp = async () => {
    const authResponse = await authRepository.sendEmailLoginOtp(username, props.authCode);
    setUsername("");
    if(!authResponse) {
      // Handle Error Scenario.
      return;
    }
    logger.debug(`Otp Sent Successfully on email.`);
    setIsOtpSent(true);
    setOtpId(authResponse.otpId);
  }

  //Function to verify OTP.
  const verifyOtp = async () => {
    const veirfyRes = await authRepository.verifyEmailLoginOtp(props.authCode,otpId || '', getNumber(otp));
    if(!veirfyRes) {
      // Handle Error Scenario.
      logger.debug(`Otp Verification Failed.`);
      return;
    }
    // If Verification is Successful, then set authentication state.
        // Set TOKEN in localStorage
        localStorage.setItem(ApplicationConstants.REFRESH_TOKEN_KEY, veirfyRes.refreshToken);

        // Set AUTHENTICATION in Redux Store
        dispatch(setAuthentication({
            isAuthenticated: true,
            accessToken: veirfyRes.accessToken,
            refreshToken: veirfyRes.refreshToken,
            user: jwtUtils.decodeToken<User>(veirfyRes.accessToken)
          }));
  }

  // If otp is Sent, then Show Otp Input Box.
  if(isOtpSent) {
    return (
      <React.Fragment>
    <OtpInput otp={otp} updateOtp={setOtp}></OtpInput>
    <button className="w-100% my-12px mb-12px h-38px orange-btn pointer mx-auto"
    onClick={verifyOtp}
    >
        Verify OTP
      </button>
      <button className="w-100% my-12px h-38px white-btn pointer mx-auto" onClick={resetComponent}>
        Change Email
      </button>
    </React.Fragment>)
  }


  // If otp is Not Sent Currently, then show username input.
  return (
    <React.Fragment>
      <UsernameInput updateUserName={setUsername} username={username} />
      <button className="w-100% my-18px h-38px orange-btn pointer mx-auto"
      onClick={sendOtp}>
        Send OTP
      </button>
    </React.Fragment>
  );
}


export default EmailOtpLogin;
