// Response of Auth Checker Function,
//Which will be called during bootstrap at client side.
export interface AuthCheckerResponse {
  isAuthenticated: boolean;
  refreshToken?: string;
  accessToken?: string;
  user?: User;
}

// Contains the Data that JWT Token Contains.
export interface DecodedToken {
  aud: string; //Application ClientId
  sub: string; //User Id
  roles: string[]; //User Scopes
  iss: string; //Issuer
  name: string; //User Name
  picture: string; //User Picture
}

// Logged In User
export interface User {
  sub: string;
  aud: string;
  name: string;
  email: string;
  scopes: [];
}

// User Authentication Store Data
export interface Authentication {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

// Response of Authenticate Client Endpoint.
export interface AuthenticateClientResponse {
  authCode: string;
  clientId: string;
  expiry: number;
  createdAt: Date;
}

// Request Body of Send Email Otp Endpoint
export interface AuthSendEmailOtpRequest {
  clientId: string;
  email: string;
  authCode: string;
}

// Response Body of Send Email Otp Endpoint
export interface AuthSendOtpResponse {
  clientId: string;
  authCode: string;
  otpId: string;
}

// Request Body of Verify Email Otp Endpoint
export interface AuthVerifyEmailOtpRequest {
  clientId: string;
  authCode: string;
  otpId: string;
  otp: number;
}

// Response Body of Verify Email Otp Endpoint
export interface AuthVerifyOtpResponse {
  refreshToken: string;
  accessToken: string;
  expiry: string;
}