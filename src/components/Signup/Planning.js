import React from "react";
import Title from "../Title";
import { messages } from "./messages";

function Planning({ userDetails, handleInputs }) {
  const cardData = [
    {
      type: "self",
      logo: "fa-solid fa-user",
      title: "For myself",
      text: "Write better. Think more clearly. Stay organised.",
    },
    {
      type: "team",
      logo: "fa-solid fa-users",
      title: "With my team",
      text: "Wikis, docs, tasks & projects, all in one place.",
    },
  ];
  return (
    <div className="flex flex-col flex-center">
      <Title
        title={messages.planningTitle}
        secondTitle={messages.planningSecondTitle}
      />
      <div className="card-container flex flex-center">
        {cardData.map((card) => {
          return (
            <div
              onClick={(e) => {
                handleInputs(e, "type");
              }}
              key={card.type}
              className={`card ${
                userDetails.planType === card.type ? "active" : ""
              }`}
              id={card.type}
            >
              <div className="card-logo" id={card.type}>
                <i className={card.logo} id={card.type}></i>
              </div>
              <p className="card-title" id={card.type}>
                {card.title}
              </p>
              <p className="card-text" id={card.type}>
                {card.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Planning;
