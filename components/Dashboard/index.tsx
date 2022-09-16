import React from "react";
import ApplicationHeader from "@components/Header/ApplicationHeader";
const Dashboard: any = () => {
  return (
    <React.Fragment>
      <ApplicationHeader></ApplicationHeader>
      <div>You Are Logged In. Click Me to Logout.</div>
    </React.Fragment>
  );
};

export default Dashboard;