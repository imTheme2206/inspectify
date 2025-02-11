import React from 'react';

export const NavigationBar = () => {
  return (
    <div className="h-20 bg-secondary-500">
      <div className="flex justify-between items-center h-full px-4">
        <Inspectify />
      </div>
    </div>
  );
};

const Inspectify = () => {
  return (
    <div className="text-2xl font-bold uppercase line-clamp-1 leading-none pointer-events-none select-none cursor-pointer back flex items-baseline">
      <span className="text-primary-500">I</span>
      nspectify
    </div>
  );
};
