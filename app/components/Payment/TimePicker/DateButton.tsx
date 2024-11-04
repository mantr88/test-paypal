import clsx from "clsx";
import {format} from "date-fns";

interface DateButtonProps {
  label: string;
  date: Date;
  onClick: (date: Date) => void;
  highlightedButton: Date | null;
  disabled?: boolean;
}

export const DateButton: React.FC<DateButtonProps> = ({
  label,
  date,
  onClick,
  highlightedButton,
  disabled,
}) => {
  const formattedDate = format(date, "dd.MM");
  const isHighlighted = highlightedButton === date;

  return (
    <button
      className={`flex w-[76px] flex-shrink-0 flex-grow flex-col items-center justify-center gap-2 rounded-5xl border border-transparent shadow-5xl outline-none sm:w-[130px] sm:gap-0 md:w-[114px] md:rounded-[12px] lg:w-[130px] lg:rounded-5xl ${
        isHighlighted ? "date-blue-option" : "bg-white text-textGray"
      } ${disabled ? "cursor-not-allowed !bg-transparent !shadow-none" : "hover:date-blue-option"}`}
      onClick={() => onClick(date)}
      disabled={disabled}
    >
      <span className="text-xss opacity-50 sm:text-s md:text-sm lg:text-s">
        {label}
      </span>
      <span className="sm::font-medium text-s2 font-normal sm:text-xl md:text-m lg:text-xl">
        {formattedDate}
      </span>
    </button>
  );
};
