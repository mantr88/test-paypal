import {ISvgProps} from "@/app/interfaces/svg";

function Link({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.99825 13.2812C10.4277 13.8553 10.9756 14.3304 11.6048 14.6742C12.234 15.0179 12.9298 15.2223 13.6449 15.2735C14.36 15.3248 15.0778 15.2216 15.7496 14.971C16.4214 14.7204 17.0314 14.3283 17.5382 13.8212L20.5382 10.8212C21.449 9.8782 21.953 8.61519 21.9416 7.30421C21.9302 5.99323 21.4044 4.73916 20.4773 3.81212C19.5503 2.88508 18.2962 2.35924 16.9853 2.34785C15.6743 2.33645 14.4113 2.84043 13.4682 3.75122L11.7482 5.46122M13.9982 11.2812C13.5688 10.7071 13.0209 10.232 12.3917 9.88828C11.7625 9.54452 11.0667 9.3401 10.3516 9.28888C9.63645 9.23767 8.91866 9.34085 8.2469 9.59143C7.57514 9.84202 6.96513 10.2341 6.45825 10.7412L3.45825 13.7412C2.54746 14.6842 2.04348 15.9472 2.05488 17.2582C2.06627 18.5692 2.59211 19.8233 3.51915 20.7503C4.44619 21.6773 5.70026 22.2032 7.01124 22.2146C8.32222 22.226 9.58524 21.722 10.5282 20.8112L12.2382 19.1012"
        stroke="#86CAE7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Link;