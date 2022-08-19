import React, { useState } from "react";
import CustomStepper from "../Stepper";
import UserDetails from "../UserDetails";
import Finish from "./Finish";
import Planning from "./Planning";
import SetupHome from "./SetupHome";
import Welcome from "./Welcome";

function Signup() {
  const initialState = {
    fullname: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    planType: "self",
  };

  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState(initialState);

  const handleInputs = (event, type) => {
    let name = type === null ? event.target.name : "planType";
    let value = type === null ? event.target.value : event.target.id;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const renderSteps = () => {
    switch (step) {
      case 1:
        return (
          <Welcome userDetails={userDetails} handleInputs={handleInputs} />
        );
      case 2:
        return (
          <SetupHome userDetails={userDetails} handleInputs={handleInputs} />
        );
      case 3:
        return (
          <Planning userDetails={userDetails} handleInputs={handleInputs} />
        );
      case 4:
        return <Finish userDetails={userDetails} handleInputs={handleInputs} />;
      case 5:
        return <UserDetails userDetails={userDetails} />;

      default:
        return (
          <div className="flex flex-col flex-center">
            <h1>Welcome to Eden</h1>
          </div>
        );
    }
  };

  const handleStepChange = (stepNum) => {
    setStep(stepNum);
  };

  return (
    <div className="signup">
      <div className="main">
        {step < 5 && (
          <div className="stepper flex flex-center">
            <CustomStepper step={step} handleStepChange={handleStepChange} />
          </div>
        )}
        <div className="steps">{renderSteps()}</div>
        {step < 5 && (
          <div className="btn-container flex flex-center">
            <button
              onClick={() => setStep((prev) => prev + 1)}
              className="btn-create"
            >
              {step > 3 ? "Launch Eden" : "Create Workspace"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
