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
        <label className="w-fit line-clamp-1">Screen Size:</label>
        <div className="w-full max-w-40 *:h-10 *:w-40 relative">
          <select
            className="absolute inset-0 z-10 border border-secondary-400 bg-secondary-100 rounded-lg px-4 py-2 opacity-0"
            onChange={(e) =>
              preset.setPreferedScreenSize(Number(e.target.value))
            }
            value={preset.preferedScreenSize}
          >
            {preset.screenSizes.map((size) => (
              <option key={size.name} value={size.value}>
                {size.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-0 border border-secondary-400 bg-secondary-100 rounded-lg px-4 py-2 text-center">
            {
              preset.screenSizes.find(
                (size) => size.value === preset.preferedScreenSize
              )?.name
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-64">
        <h3>Frames</h3>

        <FrameList />
      </div>
    </div>
  );
};
