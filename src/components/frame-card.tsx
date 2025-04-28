import React, { useEffect, useRef, useState } from 'react';
import { InputWithSearch } from './input-with-search';
import { usePreset } from '../provider/use-preset';
import { IFrameItem, useIFrame } from '../provider/iframe';

export const FrameCard = (props: { item: IFrameItem }) => {
  const { preferedScreenSize } = usePreset();
  const iframeRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const { setIframeUrl } = useIFrame(); // Function to recalculate scale

  // Update scale on mount & when width changes
  useEffect(() => {
    const calculateScreenScale = () => {
      if (!containerRef.current) return 1; // Prevent errors
      return containerRef.current.clientWidth / preferedScreenSize;
    };

    const updateScale = () => {
      setScale(calculateScreenScale());
    };

    updateScale(); // Initial calculation

    // Update on window resize
    window.addEventListener('resize', updateScale);
    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [preferedScreenSize, props.item.url]);

  return (
    <div className="border-2 border-secondary-400 bg-secondary-200 rounded-2xl px-4 py-6 flex flex-col gap-4 h-full max-h-[85svh] w-[700px]">
      <InputWithSearch
        value={props.item.url}
        onChange={(e) => {
          setIframeUrl(props.item.id, e.toString());
        }}
      />
      {props.item.url ? (
        <div
          ref={containerRef}
          className="border border-secondary-400 rounded-xl bg-white overflow-hidden h-screen"
        >
          <iframe
            ref={iframeRef}
            src={props.item.url}
            onLoad={async () => {}}
            width={preferedScreenSize}
            height={1800 * ((scale > 1 ? 0 : scale) + 1)}
            style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        </div>
      ) : null}
      <div className="flex flex-col mt-auto">
        <p>scale: {scale}</p>
        <p>screen size: {preferedScreenSize}</p>
        {/* <p>client width: {containerRef.current.clientWidth}</p> */}
      </div>
    </div>
  );
};
