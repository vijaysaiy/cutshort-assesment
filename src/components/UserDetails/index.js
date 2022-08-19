import React from "react";

function UserDetails({ userDetails }) {
  return (
    <div className="user-details flex flex-col">
      <p className="fullname">
        <strong>Full Name:</strong> &nbsp;{userDetails.fullname}
      </p>
      <p className="display-name">
        <strong>Display Name:</strong>&nbsp; {userDetails.displayName}
      </p>
      <p className="workspace-name">
        <strong>Workspace Name:</strong>&nbsp; {userDetails.workspaceName}
      </p>
      <p className="workspace-url">
        <strong> Workspace URL: </strong> &nbsp;{userDetails.workspaceUrl}
      </p>
      <p className="plan-type">
        <strong> Plan Type:</strong>&nbsp;
        <span className="plantype">{userDetails.planType}</span>
      </p>
    </div>
  );
}

export default UserDetails;
