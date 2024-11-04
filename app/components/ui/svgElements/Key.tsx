import {ISvgProps} from "@/app/interfaces/svg";

function Key({className = ""}: ISvgProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 17.9992V20.9992C2 21.5992 2.4 21.9992 3 21.9992H7V18.9992H10V15.9992H12L13.4 14.5992C14.7898 15.0833 16.3028 15.0815 17.6915 14.5939C19.0801 14.1064 20.2622 13.162 21.0444 11.9153C21.8265 10.6686 22.1624 9.19336 21.9971 7.73092C21.8318 6.26849 21.1751 4.90544 20.1344 3.86475C19.0937 2.82407 17.7307 2.16737 16.2683 2.00207C14.8058 1.83678 13.3306 2.17268 12.0839 2.95482C10.8372 3.73697 9.89279 4.91906 9.40525 6.3077C8.91771 7.69635 8.91585 9.20935 9.4 10.5992L2 17.9992Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 7.99918C16.7761 7.99918 17 7.77533 17 7.49918C17 7.22304 16.7761 6.99918 16.5 6.99918C16.2239 6.99918 16 7.22304 16 7.49918C16 7.77533 16.2239 7.99918 16.5 7.99918Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Key;
