export interface UserNameInputProps {
    username: string;
    updateUserName: (username: string) => void;
  }

  export interface OtpInputProps {
    otp: string;
    updateOtp: (otp: string) => void;
  }

export interface AuthCodeProp {
    authCode: string;
}