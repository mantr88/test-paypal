import {ISvgProps} from "@/app/interfaces/svg";

function KidyBox({className = ""}: ISvgProps) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.5 7.1115V23M12.5 7.1115C12.0579 5.2897 11.2967 3.73221 10.3156 2.64214C9.33448 1.55206 8.17906 0.979992 7 1.00053C6.18962 1.00053 5.41242 1.32245 4.8394 1.89546C4.26637 2.46848 3.94444 3.24565 3.94444 4.05602C3.94444 4.86638 4.26637 5.64355 4.8394 6.21657C5.41242 6.78958 6.18962 7.1115 7 7.1115M12.5 7.1115C12.9421 5.2897 13.7033 3.73221 14.6844 2.64214C15.6655 1.55206 16.8209 0.979992 18 1.00053C18.8104 1.00053 19.5876 1.32245 20.1606 1.89546C20.7336 2.46848 21.0556 3.24565 21.0556 4.05602C21.0556 4.86638 20.7336 5.64355 20.1606 6.21657C19.5876 6.78958 18.8104 7.1115 18 7.1115M21.0556 12.0003V20.5556C21.0556 21.2039 20.798 21.8256 20.3396 22.2841C19.8812 22.7425 19.2594 23 18.6111 23H6.38889C5.74058 23 5.11883 22.7425 4.66041 22.2841C4.20198 21.8256 3.94444 21.2039 3.94444 20.5556V12.0003M2.72222 7.1115H22.2778C22.9528 7.1115 23.5 7.65869 23.5 8.33369V10.7781C23.5 11.4531 22.9528 12.0003 22.2778 12.0003H2.72222C2.04721 12.0003 1.5 11.4531 1.5 10.7781V8.33369C1.5 7.65869 2.04721 7.1115 2.72222 7.1115Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default KidyBox;
