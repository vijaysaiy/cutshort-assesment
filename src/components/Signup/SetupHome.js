import React from "react";
import Title from "../Title";
import { messages } from "./messages";

function SetupHome({ userDetails, handleInputs }) {
  return (
    <div className="flex flex-col">
      <Title
        title={messages.setupTitle}
        secondTitle={messages.setupSecondTitle}
      />
      <form className="form">
        <div className="input-container flex flex-col">
          <label>Workspace Name</label>
          <input
            name="workspaceName"
            className="input-field"
            placeholder="Eden"
            value={userDetails.workspaceName}
            onChange={(e) => handleInputs(e, null)}
          />
        </div>
        <div className="input-container flex flex-col">
          <label>
            Workspace URL <span>(Optional)</span>
          </label>
          <div className="workspace-url-container ">
            <button className="btn-disbaled setup-home-btn " disabled>
              www.eden.com/
            </button>
            <input
              style={{ width: "60%" }}
              name="workspaceUrl"
              placeholder="Example"
              value={userDetails.workspaceUrl}
              onChange={(e) => handleInputs(e, null)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SetupHome;
