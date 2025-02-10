import React from 'react';
import { usePreset } from '../hook/use-preset';

export const SidePanel = (props: {
  selectedScreenSize: number;
  setPreferedScreenSize: (size: number) => void;
}) => {
  const { screenSizes } = usePreset();
  return (
    <div>
      <select name="" id="">
        {screenSizes.map((size) => (
          <option
            key={size.name}
            value={size.value}
            selected={size.value === props.selectedScreenSize}
            onClick={() => props.setPreferedScreenSize(size.value)}
          >
            {size.name}
          </option>
        ))}
      </select>
    </div>
  );
};
