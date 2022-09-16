import React from "react";
import Script from "next/script";

const LaodingPageComponent = () => {
  return (
    <React.Fragment>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="beforeInteractive"
        async={true}
        defer={true}
      ></Script>
      <div>
        <h1>Loading...</h1>
      </div>
    </React.Fragment>
  );
};

export default LaodingPageComponent;
