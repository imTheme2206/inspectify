import React from 'react';
import { IFrameItem, useIFrame } from '../provider/iframe';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { Button } from './button';

export const FrameList = () => {
  const { iframeItems, removeIframe, addIframe } = useIFrame();
  return (
    <div className="w-full h-full max-h-[550px] flex flex-col overflow-scroll gap-2 p-2 rounded-lg border border-primary-400 bg-secondary-400">
      {iframeItems.map((item, index) => (
        <UrlItem
          key={index}
          item={item}
          onClick={() => {
            removeIframe(item.id);
          }}
        />
      ))}
      <Button
        onClick={() => {
          addIframe();
        }}
      >
        <PlusIcon />
        <span>Add Frame</span>
      </Button>
    </div>
  );
};

const UrlItem = (props: { item: IFrameItem; onClick: () => void }) => {
  return (
    <div className="h-8 overflow-hidden rounded px-2 py-1 flex items-center justify-between flex-nowrap">
      <p className="text-ellipsis line-clamp-1">
        {props.item.url || 'New Frame'}
      </p>
      <button
        className="text-primary-300 active:scale-95 active:text-primary-300 hover:scale-110 hover:text-slate-100 cursor-pointer"
        onClick={props.onClick}
      >
        <Cross2Icon />
      </button>
    </div>
  );
};
