import React, {ReactNode, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Advice from "../ui/svgElements/Advice";
import TooltipArrow from "../ui/svgElements/TooltipArrow";

interface TooltipProps {
  children: React.ReactNode;
  message: ReactNode;
  addStyles?: string;
  isShowTooltipArrow?: boolean;
}

const TooltipForPayment: React.FC<TooltipProps> = ({
  children,
  message,
  addStyles,
  isShowTooltipArrow = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleTouchStart = () => setIsHovered(true);
  const handleTouchEnd = () => setIsHovered(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -10}}
            className={`absolute -left-full bottom-[170%] z-20 w-[240px] rounded-[14px] border border-blue-900 bg-white pb-5 pl-[14px] pr-6 pt-[10px] text-s2 text-blue-900 sm:w-[281px] sm:border-[2px] md:text-sm lg:-left-[80%] lg:w-[307px] lg:text-s3 xl:w-[343px] xl:text-sm ${addStyles}`}
          >
            {isShowTooltipArrow ?
              <TooltipArrow className="absolute -bottom-[8.54px] left-[30%] rotate-[2deg] md:left-[36%]" />
            : <svg
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-8px] right-[-1.78px] text-blue-900"
              >
                <g clipPath="url(#clip0_4273_127866)">
                  <path
                    d="M12.7021 23.234C14.9391 24.0214 17.8701 25.4055 20.0329 26.48C21.3855 27.1519 23 26.1751 23 24.6649V0.5L1 20.8511C1 20.8511 8.09089 21.6111 12.7021 23.234Z"
                    fill="white"
                  />
                  <path
                    d="M23 0V24.6648C23 26.1751 21.3855 27.1519 20.0329 26.48C17.8701 25.4055 14.9391 24.0214 12.7021 23.234C8.09089 21.6111 1 20.8511 1 20.8511"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="stroke-[0.7px] sm:stroke-[1.5px]"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4273_127866">
                    <rect
                      width="24"
                      height="28"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            <div className="relative">
              <div className="flex flex-row items-start gap-1">
                <Advice className="mt-[2px] size-6 flex-shrink-0 rounded-full text-blue-900" />
                <div className="text-left font-normal">{message}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TooltipForPayment;
