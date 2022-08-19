import React from "react";

function Title({ title, secondTitle }) {
  return (
    <>
      <div className="welcome-title">{title}</div>
      <div className="change-title">{secondTitle}</div>
    </>
  );
}

export default Title;
