import React from 'react';

export const NavigationBar = () => {
  return (
    <div className="h-16 bg-secondary-500">
      <div className="flex justify-between items-center h-full px-4">
        <InspectifyLogo />
      </div>
    </div>
  );
};

const InspectifyLogo = () => {
  return (
    <div className="text-2xl text-white font-bold uppercase line-clamp-1 leading-none pointer-events-none select-none cursor-pointer back flex items-baseline">
      <span className="text-amber-300 text-3xl">I</span>
      <span className="">nspectify</span>
    </div>
  );
};
