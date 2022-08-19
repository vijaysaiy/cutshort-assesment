import React from "react";
import Title from "../Title";
import { messages } from "./messages";

function Welcome({ userDetails, handleInputs }) {
  return (
    <div className="flex flex-col">
      <Title
        title={messages.welcomeTitle}
        secondTitle={messages.welcomeSecondTitle}
      />
      <form className="form">
        <div className="input-container flex flex-col">
          <label>Full Name</label>
          <input
            name="fullname"
            className="input-field"
            placeholder="Steve Jobs"
            value={userDetails.name}
            required
            onChange={(e) => handleInputs(e, null)}
          />
        </div>
        <div className="input-container flex flex-col">
          <label>Display Name</label>
          <input
            name="displayName"
            className="input-field"
            placeholder="Steve"
            value={userDetails.displayName}
            required
            onChange={(e) => handleInputs(e, null)}
          />
        </div>
      </form>
    </div>
  );
}

export default Welcome;
