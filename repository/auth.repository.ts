import authClient from "../axios/auth.client";
import ApplicationConstants from "../constants/ApplicationConstants";
import { AuthenticateClientResponse, AuthSendOtpResponse, AuthVerifyOtpResponse } from "../types/AuthTypes";
import logger from "../utils/Logger";
import statusCodesUtils from "../utils/StatusCodesUtils";

class AuthRepository {
  public async sendEmailLoginOtp(email: string, authCode: string) {
    const responsePayload = await authClient.post<AuthSendOtpResponse>("/email-otp-login/send-otp", {
      email,
      clientId: ApplicationConstants.CLIENT_ID,
      authCode,
    });
    if (statusCodesUtils.isOk(responsePayload.status)) {
      return responsePayload.data;
    }
    logger.error(`Error Occured while sending OTP : ${responsePayload.data}`);
    return null;
  }

  public async getAccessToken(refreshToken: string) {
    const responsePayload = await authClient.post("/auth/get-access-token", {
      refreshToken,
      clientId: ApplicationConstants.CLIENT_ID
    });
    if (statusCodesUtils.isOk(responsePayload.status)) {
      return responsePayload.data;
    }
    return null;
  }

  public async getAuthCode() {
    logger.debug(`Fetching Auth Code For Application`);
    const responsePayload = await authClient.post<AuthenticateClientResponse>(
      "/auth/authenticate-client",
      {
        clientId: ApplicationConstants.CLIENT_ID,
      }
    );
    if (statusCodesUtils.isOk(responsePayload.status)) {
      return responsePayload.data.authCode;
    }
    return null;
  }

  // Verify Email Otp
  public async verifyEmailLoginOtp(authCode: string, otpId: string, otp:number) {
    logger.debug(`Veirfy Email Otp With Parameters: AuthCode: ${authCode} OtpID:${otpId}Otp: ${otp}`);
    const responsePayload = await authClient.post<AuthVerifyOtpResponse>(
      "/email-otp-login/verify-otp",
      {
        clientId: ApplicationConstants.CLIENT_ID,
        authCode,
        otpId,
        otp
      }
    );
    if (statusCodesUtils.isOk(responsePayload.status)) {
      return responsePayload.data;
    }
    return null;
  }
}
const authRepository = new AuthRepository();

export default authRepository;
