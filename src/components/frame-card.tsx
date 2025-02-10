import React, { useEffect, useRef, useState } from 'react';
import { useIFrame } from '../hook/useiframe';
import { InputWithSearch } from './input-with-search';

export const FrameCard = (props: { selectedScreenSize: number }) => {
  const preferedScreenSize = props.selectedScreenSize;
  const { iframeUrl, setIframeUrl, setIsLoading, isLoading } = useIFrame();
  const iframeRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  // Function to recalculate scale

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
  }, [preferedScreenSize]);

  return (
    <div className="border-2 border-secondary-400 bg-secondary-200 rounded-2xl px-4 py-6 flex flex-col gap-4 w-full h-full max-h-[80svh] min-w-[500px] max-w-[700px]">
      <InputWithSearch
        value={iframeUrl}
        onChange={(e) => {
          setIsLoading(true);
          setIframeUrl(e);
        }}
      />
      {iframeUrl ? (
        <div
          ref={containerRef}
          className="border border-secondary-400 rounded-xl bg-amber-50 overflow-hidden h-screen"
        >
          <iframe
            ref={iframeRef}
            src={iframeUrl}
            onLoad={async () => {
              await setIsLoading(false);
            }}
            allowTransparency={false}
            style={{
              width: `${preferedScreenSize}px`, // Scale counteracted
              transform: `scale(${scale})`, // Shrinks it
              transformOrigin: 'top left',
              height: `calc(1200px * ${scale})`,
            }}
          />
        </div>
      ) : null}
      <div className="flex flex-col">
        <p>scale: {scale}</p>
        <p>screen size: {preferedScreenSize}</p>
        {/* <p>client width: {containerRef.current.clientWidth}</p> */}
      </div>
      {isLoading && <div className="text-white">Load</div>}
    </div>
  );
};
