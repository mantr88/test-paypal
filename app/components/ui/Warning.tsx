import React from "react";
import Advice from "./svgElements/Advice";

interface Props {
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  children: string;
  addedStyles?: string;
}

function Warning({
  bgColor = "bg-white",
  textColor = "text-red-600",
  children,
  borderColor = "border-transparent",
  addedStyles,
}: Props) {
  return (
    <div
      className={`${textColor} ${bgColor} ${borderColor} ${addedStyles} mt-[14px] flex w-full items-center gap-1 rounded-xl border-[1px] px-2 pb-2 pt-1 text-s2 sm:mt-5 sm:rounded-[14px] sm:pb-[10px] sm:pt-2 sm:text-sm2 md:mt-[30px] md:items-start md:rounded-[18px] md:pb-[18px] md:pl-[14px] md:pr-7 md:pt-[14px] md:text-l lg:mt-6 lg:border-[2px] lg:px-[18px] xl:mt-[30px]`}
    >
      <div>
        <Advice className={textColor} />
      </div>
      <p className="text-start">{children}</p>
    </div>
  );
}

export default Warning;
