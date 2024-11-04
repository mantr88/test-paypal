import Advice from "./svgElements/Advice";
import TooltipPortal from "./TooltipPortal";

interface CustomTooltipProps {
  message: string;
  addedStyles?: string;
  arrowStyles?: string;
  arrow2Styles?: string;
  textStyle?: string;
}

function CustomTooltip({
  message,
  addedStyles,
  arrow2Styles,
  arrowStyles,
  textStyle,
}: CustomTooltipProps) {
  return (
    <div
      id="tooltip"
      className={`${addedStyles} absolute -right-[75px] -top-[75px] z-20 flex w-[289px] rounded-[14px] border-[1px] border-orange-600 bg-white pb-[18px] pl-[10px] pr-[14px] pt-[10px] sm:-right-[90px] sm:-top-[84px] sm:w-[356px] sm:border-2 md:right-[35px] md:w-[399px] md:rounded-br-none xl:w-[462px]`}
    >
      <div>
        <Advice className="h-6 w-6 text-orange-800" />
      </div>
      <div className={`${arrowStyles} tooltip-arrow`}></div>
      <div className={`${arrow2Styles} tooltip-arrow-2`}></div>
      <div
        className={`${textStyle} ml-1 text-s2 text-orange-700 sm:text-sm2 md:ml-[10px] md:text-m`}
      >
        {message}
      </div>
    </div>
  );
}

export default CustomTooltip;
