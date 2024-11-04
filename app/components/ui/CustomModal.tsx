"use client";

import {useEffect} from "react";
import ModalPortal from "./ModalPortal";
import {motion} from "framer-motion";

interface CustomModalProps {
  children: React.ReactNode;
  onClose: () => void;
}
function CustomModal({children, onClose}: CustomModalProps) {
  useEffect(() => {
    // Закритя модального вікна при натисканні на клавішу "Escape"
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden"; // Блокування скролу
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto"; // Відновлення скролу
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center font-sfProDisplay">
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-[51] h-full w-full bg-black opacity-70"
          initial={{
            opacity: 0,
          }}
          animate={{opacity: 0.7}}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        ></motion.div>
        {children}
      </div>
    </ModalPortal>
  );
}

export default CustomModal;
