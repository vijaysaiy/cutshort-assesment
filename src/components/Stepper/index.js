import React from "react";
import Stepper from "react-stepper-horizontal/lib/Stepper";

function CustomStepper({ step, handleStepChange }) {
  const stepperProps = {
    defaultColor: "#fff",
    defaultBorderColor: "#d4d7de",
    defaultBorderStyle: "solid",
    activeColor: "#664ce5",
    completeBarColor: "#664ce5",
    activeStep: step - 1,
    completeColor: "#664ce5",
    circleFontColor: "#d4d7de",
    defaultBorderWidth: 1,
  };

  return (
    <Stepper
      steps={[
        {
          title: "",
          onClick: () => handleStepChange(1),
        },
        {
          title: "",
          onClick: () => handleStepChange(2),
        },
        {
          title: "",
          onClick: () => handleStepChange(3),
        },
        {
          title: "",
          onClick: () => handleStepChange(4),
        },
      ]}
      {...stepperProps}
    />
  );
}

export default CustomStepper;
