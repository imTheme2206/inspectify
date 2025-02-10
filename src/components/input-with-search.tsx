import React, { SetStateAction, useState } from 'react';

export const InputWithSearch = (props: {
  value: string;
  onChange: React.Dispatch<SetStateAction<string>>;
}) => {
  const [tempValue, setTempValue] = useState<string>(props.value);
  return (
    <div className="px-4 py-2 border-primary-400 bg-secondary-100 rounded-xl border flex gap-x-2 items-center justify-between">
      <input
        type="text"
        className="w-full"
        value={tempValue}
        onChange={(e) => setTempValue(e.target.value)}
      />
      <ButtonWithIcon
        onClick={() => {
          if (tempValue === '') {
            return;
          }
          props.onChange(tempValue);
        }}
      >
        Search
      </ButtonWithIcon>
    </div>
  );
};

export const ButtonWithIcon = (props: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};
