import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import clsx from "clsx";
// import {useUtilsContext} from "@/app/context/UtilsContext";

interface PlusMinusQuantityProps {
  productId: string;
  productQuantity: number;
  addStyles?: string;
}

function PlusMinusQuantity({
  productQuantity,
  productId,
  addStyles,
}: PlusMinusQuantityProps) {
  // const {decreaseProductQuantity, increaseProductQuantity} = useUtilsContext();
  const [animatingNumber, setAnimatingNumber] = useState<number | null>(null);

  const handleMinusClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (productQuantity === 0) return;
    setAnimatingNumber(productQuantity - 1);
    // decreaseProductQuantity(id);
  };

  const handlePlusClick = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setAnimatingNumber(productQuantity + 1);
    // increaseProductQuantity(id);
  };

  return (
    <div
      className={`${addStyles} standart-animation flex w-[70px] items-center justify-center gap-2 rounded-full bg-blue-150 px-5 pb-2 pt-[5px] text-center text-s2 text-blue-700 sm:h-[38px] sm:w-[83px] lg:hover:bg-blue-200 lg:hover:text-blue-600`}
    >
      <span
        onClick={(e) => handleMinusClick(e, productId)}
        className={clsx(
          productQuantity === 0 && "text-blue-300",
          "cursor-pointer"
        )}
      >
        -
      </span>
      <div className="relative flex items-center justify-center">
        {productQuantity}
        <AnimatePresence>
          {animatingNumber !== null && (
            <motion.div
              className="absolute top-0 flex h-full w-full items-center justify-center"
              initial={{y: 0, opacity: 1}}
              animate={{y: -100, opacity: 0}}
              exit={{y: -100, opacity: 0}}
              transition={{duration: 0.6, ease: "easeInOut"}}
              onAnimationComplete={() => setAnimatingNumber(null)}
            >
              <motion.div
                className="absolute flex size-[34px] items-center justify-center rounded-full bg-blue-200 text-s2 text-blue-600 xl:size-10 xl:text-lg"
                initial={{scale: 0.8}}
                animate={{scale: [0.8, 1, 1.1, 1, 0.8]}}
                transition={{duration: 1, ease: "easeInOut"}}
              >
                {animatingNumber}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <span
        onClick={(e) => handlePlusClick(e, productId)}
        className="cursor-pointer"
      >
        +
      </span>
    </div>
  );
}

export default PlusMinusQuantity;
