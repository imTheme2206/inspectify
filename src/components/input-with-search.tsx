import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import React, { SetStateAction, useState } from 'react';

export const InputWithSearch = (props: {
  value: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}) => {
  const [tempValue, setTempValue] = useState<string>(props.value);
  return (
    <div className="w-full  border-primary-400 bg-secondary-100 rounded-xl border flex gap-x-2 items-center justify-between focus-within:ring-2 focus-within:ring-primary-400 transition-all">
      <div className="px-4 py-2 w-full">
        <input
          type="text"
          className="w-full ring-0 focus:ring-0 focus:outline-none"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
      </div>
      <ButtonWithIcon
        onClick={() => {
          if (tempValue === '') {
            return;
          }
          props.onChange(tempValue);
        }}
        Icon={MagnifyingGlassIcon}
      >
        Search
      </ButtonWithIcon>
    </div>
  );
};

export const ButtonWithIcon = (props: {
  children: React.ReactNode;
  onClick: () => void;
  Icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}) => {
  const Icon = props.Icon;
  return (
    <button
      className="flex items-center gap-x-1 bg-primary-400 px-4 py-2 hover:bg-primary-300 transition rounded-r-lg cursor-pointer"
      onClick={props.onClick}
    >
      {Icon && <Icon />} {/* Rendering the Icon if it exists */}
      {props.children}
    </button>
  );
};
