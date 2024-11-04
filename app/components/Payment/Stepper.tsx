import React from "react";
import clsx from "clsx";
import Checked from "../ui/svgElements/Checked";

interface Step {
  label: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({steps, currentStep}) => {
  return (
    <div className="relative flex w-[200px] items-center justify-between md:w-full">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="justife-center relative flex flex-col items-center self-start text-center md:w-[114px] md:gap-[10px] lg:w-[126px] lg:gap-3 xl:w-[148px] xl:gap-2">
            <div
              className={clsx(
                "flex size-[38px] flex-shrink-0 items-center justify-center rounded-full border transition-all sm:text-sm2 md:text-m lg:size-11 lg:text-xl xl:size-[60px] xl:border-[2px] xl:text-3xls xl:font-medium",
                {
                  "border-solid border-grey-400 text-grey-400":
                    index < currentStep,
                  "border-solid border-textGray bg-white text-textGray":
                    index === currentStep,
                  "border-dashed border-grey-400 bg-blue-20 text-grey-400":
                    index > currentStep,
                }
              )}
            >
              {index < currentStep ?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  className="x] h-[16px] w-5 text-grey-400"
                >
                  <path
                    d="M2 9L8.66667 16L22 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-1 lg:stroke-2 xl:stroke-[3px]"
                  />
                </svg>
              : index + 1}
            </div>
            <div
              className={clsx(
                "hidden md:block md:text-sm1 lg:text-sm2 xl:text-lg",
                {
                  "text-grey-400": index < currentStep,
                  "text-textGray": index === currentStep,
                  "text-gray-400": index > currentStep,
                }
              )}
            >
              {step.label}
            </div>
            {(index < steps.length - 1 || index === 0) && (
              <div
                className={clsx(
                  "border-grey-400 absolute left-[100%] top-1/2 z-[-1] flex h-0 w-[43px] items-center justify-between border-t md:left-[66%] md:w-[85px] lg:w-[99px] lg:left-[68%] xl:left-[70%] xl:w-[150px] xl:border-t-[2px]",
                  {
                    "border-solid md:top-[29%] xl:top-[33%]": index === 0,
                    "border-dashed md:!top-[24%] xl:!top-[29%]": index >= currentStep,
                  }
                )}
              ></div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
