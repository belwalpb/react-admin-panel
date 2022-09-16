import type { NextPage } from "next";
import React from "react";
import SimpleHeader from "@components/Header/SimpleHeader";
import LoginBox from "@components/LoginBox";
import Script from "next/script";
const Login: NextPage = () => {
  return (
    <React.Fragment>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
        async={true}
        defer={true}
      ></Script>
      <SimpleHeader></SimpleHeader>
      <LoginBox></LoginBox>
    </React.Fragment>
  );
};

export default Login;
