import { useState } from 'react';

enum ScreenWidthPreset {
  mobile = 390,
  tablet = 1024,
  desktop = 1600,
}

export const usePreset = () => {
  const screenSizes = [
    {
      name: 'Mobile',
      value: ScreenWidthPreset.mobile,
    },
    {
      name: 'Tablet',
      value: ScreenWidthPreset.tablet,
    },
    {
      name: 'Desktop',
      value: ScreenWidthPreset.desktop,
    },
  ];
  const [preferedScreenSize, setPreferedScreenSize] =
    useState<ScreenWidthPreset>(ScreenWidthPreset.mobile);

  return {
    screenSizes,
    preferedScreenSize,
    setPreferedScreenSize,
  };
};
