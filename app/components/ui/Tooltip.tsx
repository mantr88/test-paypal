import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Info from "../ui/svgElements/Info";
import Advice from "../ui/svgElements/Advice";

interface TooltipProps {
  children: React.ReactNode;
  message: string;
  addedStyles?: string;
  newStyles?: string;
  arrowStyles?: string;
  arrow2Styles?: string;
  iconColor: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  message,
  addedStyles,
  newStyles,
  iconColor,
  arrowStyles,
  arrow2Styles,
}) => {
  const [isHovered, setIsHovered] = useState(true);

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
            className={`${addedStyles} ${newStyles ? newStyles : "absolute -right-[75px] -top-[75px] z-20 flex w-[289px] rounded-[14px] border-[1px] border-orange-600 bg-white pb-[18px] pl-[10px] pr-[14px] pt-[10px] text-orange-700 sm:-right-[90px] sm:-top-[84px] sm:w-[356px] sm:border-2 md:right-[35px] md:w-[399px] md:rounded-br-none xl:w-[462px]"}`}
          >
            <div className={`${arrowStyles} tooltip-arrow`}></div>
            <div className={`${arrow2Styles} tooltip-arrow-2`}></div>
            <div className="flex flex-row items-start gap-[10px]">
              <Advice
                className={`mt-[2px] h-6 w-6 flex-shrink-0 rounded-full ${iconColor}`}
              />
              <p className="text-left">{message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
