import React, {FC} from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  id?: string;
}

const CustomCheckbox: FC<CheckboxProps> = ({checked, onChange, id}) => {
  return (
    <input
      id={id}
      checked={checked}
      type="checkbox"
      onChange={(e) => onChange(e.target.checked)}
      className="mr-[10px] size-6 rounded border-[2px] border-blue-400 hover:!shadow-none hover:!outline-none focus:!shadow-none focus:!outline-none"
    />
  );
};

export default CustomCheckbox;
