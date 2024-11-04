import {ISvgProps} from "@/app/interfaces/svg";

function Halal({className = ""}: ISvgProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className}>
    <rect width="40" height="40" fill="url(#pattern0_4691_286362)"/>
    <defs>
    <pattern id="pattern0_4691_286362" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_4691_286362" transform="scale(0.00208333)"/>
    </pattern>
    <image id="image0_4691_286362" width="480" height="480" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>
    
    
  );
}

export default Halal;
