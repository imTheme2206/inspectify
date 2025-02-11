import React from 'react';
import { usePreset } from '../provider/use-preset';
import { FrameList } from './frame-list';
import { GearIcon } from '@radix-ui/react-icons';

export const SidePanel = () => {
  const preset = usePreset();

  return (
    <div className="bg-secondary-500 p-4 flex w-[400px] flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <GearIcon width={20} height={20} />
          Settings
        </h2>
      </div>
      <div className="flex gap-2 items-center">
        <label>Screen Size:</label>
        <select
          className="border border-secondary-400 bg-secondary-100 rounded-lg px-4 py-2"
          onChange={(e) => preset.setPreferedScreenSize(Number(e.target.value))}
          value={preset.preferedScreenSize}
        >
          {preset.screenSizes.map((size) => (
            <option key={size.name} value={size.value}>
              {size.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 h-64">
        <h3>Frames</h3>

        <FrameList />
      </div>
    </div>
  );
};
