class JwtUtils {
  public decodeToken<T = Object>(token: string): T | null {
    try {
      // if the token has more or less than 3 parts or is not a string
      // then is not a valid token
      if (token.split(".").length !== 3 || typeof token !== "string") {
        return null;
      }

      // payload ( index 1 ) has the data stored and
      // data about the expiration time
      const payload: string = token.split(".")[1];
      // determine the padding characters required for the base64 string
      const padding: string = "=".repeat((4 - (payload.length % 4)) % 4);
      // convert the base64url string to a base64 string
      const base64: string =
        payload.replace("-", "+").replace("_", "/") + padding;
      // decode and parse to json
      return JSON.parse(atob(base64));
    } catch (error) {
      // Return null if something goes wrong
      return null;
    }
  }

  public isTokenExpired(token: string): boolean {
    const decodedToken: any = this.decodeToken(token);
    let result: boolean = true;
    if (decodedToken && decodedToken.exp) {
      const expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp); // sets the expiration seconds
      // compare the expiration time and the current time
      result = expirationDate.valueOf() < new Date().valueOf();
    }
    return result;
  }
}

const jwtUtils = new JwtUtils();
export default jwtUtils;
