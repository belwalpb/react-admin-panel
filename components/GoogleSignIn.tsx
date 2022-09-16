import React, { useEffect } from "react";
declare const google: any;

function GoogleSignIn() {
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "903883922826-r2l923qsiseic7bl3f6ksgv9vc9uo64c.apps.googleusercontent.com",
      context: "signin",
      ux_mode: "redirect",
      login_uri:
        "https://auth-server-backend-dev.com/google/validate-response?authSession=361b14600c46bf1291da126cfb20de3f8d8f00e4992b7b2500804aacde43205cade3bfc405030ea70e5c79fa85f765b8ffd03e894324ebc0bced7d8f72312577",
      auto_prompt: false,
      access_type: "offline",
      nonce:
        "361b14600c46bf1291da126cfb20de3f8d8f00e4992b7b2500804aacde43205cade3bfc405030ea70e5c79fa85f765b8ffd03e894324ebc0bced7d8f72312577",
    });

    google.accounts.id.renderButton(
      document.getElementById("google-sign-in-button"),
      {
        type: "standard",
        shape: "pill",
        text: "signin_with",
        theme: "outline",
        size: "large",
        logo_alignment: "left",
        width: "350px",
      } // customization attributes
    );
  }, []);
  return (
    <React.Fragment>
      <div
        id="google-sign-in-button"
        className="flex align-center justify-center"
      ></div>
    </React.Fragment>
  );
}

export default GoogleSignIn;
