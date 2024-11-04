import {motion} from "framer-motion";

interface IFormWrapProps {
  children: React.ReactNode;
}

function FormWrap({children}: IFormWrapProps) {
  return (
    <motion.div
      className="no-scrollbar standart-animation container relative z-[52] mx-5 flex max-h-full flex-col gap-4 overflow-y-auto sm:w-[436px] md:w-[728px] lg:mx-[30px] lg:w-[964px] lg:flex-row lg:items-stretch lg:justify-center lg:gap-5 xl:w-[1354px]"
      initial={{
        scale: 0,
      }}
      animate={{scale: 1}}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default FormWrap;
