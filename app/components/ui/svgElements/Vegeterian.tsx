import {ISvgProps} from "@/app/interfaces/svg";

function Vegeterian({className = ""}: ISvgProps) {
  return (
    <svg
      width="39"
      height="41"
      viewBox="0 0 39 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M28.4378 18.7464C25.2593 18.7464 22.4417 20.2752 20.6234 22.6393V21.974H20.6095C20.4592 19.397 19.3497 16.9758 17.5078 15.2051C15.6658 13.4344 13.2305 12.4479 10.6993 12.447H0.136719C0.136719 18.0386 4.57828 22.5685 10.0608 22.5685H17.2645V40.2068H20.6234V28.882H29.0763C34.5588 28.882 39.0004 24.3521 39.0004 18.7606H28.4378V18.7464Z"
        fill="#86D72F"
      />
      <path
        d="M22.7332 15.9766C22.7332 15.9766 17.1622 7.5773 27.239 0.658796C33.2358 10.8162 22.7332 15.9766 22.7332 15.9766Z"
        fill="#86D72F"
      />
    </svg>
  );
}

export default Vegeterian;
