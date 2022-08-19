import React from "react";
import Title from "../Title";
import { messages } from "./messages";

function Finish({ userDetails }) {
  return (
    <div className="finish flex flex-col flex-center">
      <div className="success">
        <i class="fa-solid fa-circle-check"></i>
      </div>
      <Title
        title={`${messages.finishTitle} ${userDetails.fullname}`}
        secondTitle={messages.finishSecondTitle}
      />
    </div>
  );
}

export default Finish;
