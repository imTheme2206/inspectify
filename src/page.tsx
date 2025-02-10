import React from 'react';
import { FrameCard } from './components/frame-card';

export const Page = (props: { selectedScreenSize: number }) => {
  return (
    <div className="min-h-screen bg-secondary-500 px-6 py-8 grid gap-4 grid-flow-col overflow-scroll">
      <FrameCard selectedScreenSize={props.selectedScreenSize} />
      <FrameCard selectedScreenSize={props.selectedScreenSize} />
      <FrameCard selectedScreenSize={props.selectedScreenSize} />
    </div>
  );
};
