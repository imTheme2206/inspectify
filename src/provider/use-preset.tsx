import React, { createContext, useState } from 'react';

enum ScreenWidthPreset {
  mobile = 390,
  tablet = 1024,
  desktop = 1600,
}

type PresetContextType = {
  screenSizes: { name: string; value: ScreenWidthPreset }[];
  preferedScreenSize: ScreenWidthPreset;
  setPreferedScreenSize: (size: ScreenWidthPreset) => void;
};

export const usePreset = () => {
  const context = React.useContext(PresetContext);
  if (context === undefined) {
    throw new Error('usePreset must be used within a PresetProvider');
  }
  return context;
};

const PresetContext = createContext<PresetContextType | undefined>(undefined);

export const PresetProvider = ({ children }: { children: React.ReactNode }) => {
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

  return (
    <PresetContext.Provider
      value={{ screenSizes, preferedScreenSize, setPreferedScreenSize }}
    >
      {children}
    </PresetContext.Provider>
  );
};
