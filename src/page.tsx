import React from 'react';
import { FrameCard } from './components/frame-card';
import { useIFrame } from './provider/iframe';
import { LayersIcon } from '@radix-ui/react-icons';

export const Page = () => {
  const { iframeItems } = useIFrame();

  if (iframeItems.length === 0) {
    return <EmptyPage />;
  }

  return (
    <div className="min-h-auto w-full px-6 py-8 grid gap-4 grid-flow-col overflow-scroll">
      {iframeItems.map((item, index) => (
        <FrameCard key={index} item={item} />
      ))}
    </div>
  );
};

const EmptyPage = () => {
  return (
    <div className="w-full px-6 py-8 grid gap-4 grid-flow-col overflow-scroll">
      <div className="rounded-2xl px-4 py-6 flex flex-col gap-4 w-full h-full max-h-[80svh] min-w-[500px] justify-center items-center gap-y-6">
        <LayersIcon className="size-24" />
        <h1 className="text-3xl font-semibold text-center">
          Add a frame to get started
        </h1>
      </div>
    </div>
  );
};
