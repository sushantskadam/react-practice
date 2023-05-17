import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./AddProp.css";
// import { Stepper } from "react-form-stepper";
import Stepper from "react-stepper-horizontal";
import AddPropChild from "./AddPropChild";
function AddProp() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);
  const [steps, setSteps] = useState([
    {
      title: "Select",
      // href: 'http://example1.com',
      onClick: (e) => {
        e.preventDefault();
        setStep(0);
      },
    },
    {
      title: "Overview",
      // href: 'http://example2.com',
      onClick: (e) => {
        e.preventDefault();
        setStep(1);
      },
    },
    {
      title: "Images & videos",
      // href: 'http://example3.com',
      onClick: (e) => {
        e.preventDefault();
        setStep(2);
      },
    },
  ]);

  return (
    <div className="addProp pt-5">
      <div className="container">
        <h2 className="addProp_title">Let’s prepare your listing... </h2>
        <p className="addPropDesc">
          We use these details to post your property on Aurum Planet so that you
          can sell your properties easily.{" "}
        </p>
        <div className="stepper-wrapper">
          <div
            className={`stepper-item ${step > 0 && "completed"}`}
            onClick={() => setStep(0)}
          >
            <div className="step-counter">1</div>
            <div className="step-name">Select</div>
          </div>
          <div
            className={`stepper-item ${step > 1 && "completed"}`}
            onClick={() => setStep(1)}
          >
            <div className="step-counter">2</div>
            <div className="step-name">Overview</div>
          </div>
          <div
            className={`stepper-item ${step > 2 && "completed"}`}
            onClick={() => setStep(2)}
          >
            <div className="step-counter">3</div>
            <div className="step-name">Images & videos</div>
          </div>
          {/* <div className={`stepper-item ${step>3 && "completed"}`}>
        <div className="step-counter">4</div>
        <div className="step-name">Forth</div>
      </div> */}
        </div>

        <div className="stepper">
          {/* <Stepper
          steps={[
            { label: "Select" },
            { label: "Overview" },
            { label: "Images & videos" },
          ]}
          activeStep={step}
          styleConfig={StepStyleDTO}
          // steps={StepsDTO}
        /> */}
          <Stepper
            activeTitleColor="white"
            defaultTitleColor="white"
            completeColor="#00c08a"
            activeColor="#242424"
            // activeColor="red"

            defaultColor="#242424"
            completeTitleColor="#00c08a"
            completeBarColor="#00c08a"
            activeBarColor="#00c08a"
            defaultBarColor="#242424"
            barStyle="solid"
            defaultBorderWidth={10}
            lineMarginOffset={1}
            size={40}
            steps={steps}
            activeStep={step}
          />

          {/* <div className="step-indicator my-5  ">
            <div className="step-indicator__body">
              <div className="step-indicator__steps row justify-content-center">
                <div className="step-indicator__step col-md-3 step-done">
                  <div className="step-indicator__step-circle">
                    <span className="step-indicator__step-circle-label">1</span>
                  </div>
                  <div className="step-indicator__step-title d-none d-lg-block d-md-block p-1">
                    Loan Type
                  </div>
                  <div className="step-indicator__step-title d-block d-lg-none d-md-none d-sm-block p-1">
                    Loan Type
                  </div>
                </div>
                <div className="step-indicator__step col-md-3 step-done">
                  <div className="step-indicator__step-circle">
                    <span className="step-indicator__step-circle-label">2</span>
                  </div>
                  <div className="step-indicator__step-title d-none d-lg-block d-md-block p-1">
                    Loan Amount
                  </div>
                  <div className="step-indicator__step-title d-block d-lg-none d-md-none d-sm-block p-1">
                    Loan Amount
                  </div>
                </div>
                <div className="step-indicator__step col-md-3 step-undone">
                  <div className="step-indicator__step-circle">
                    <span className="step-indicator__step-circle-label">3</span>
                  </div>
                  <div className="step-indicator__step-title d-none d-lg-block d-md-block p-1">
                    Basic Details
                  </div>
                  <div className="step-indicator__step-title d-block d-lg-none d-md-none d-sm-block p-1">
                    Basic Details
                  </div>
                </div>
              </div>
              <div className="step-indicator__bar">
                <div
                  className="step-indicator__bar-inner"
                  // style="width: 100%;"
                ></div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="stepper_body">
          <AddPropChild step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  );
}

export default AddProp;
