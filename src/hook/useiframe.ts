import { useState } from 'react';

export const useIFrame = () => {
  const [iframeUrl, setIframeUrl] = useState<string>('http://localhost:5174/');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return {
    iframeUrl,
    setIframeUrl,
    setIsLoading,
    isLoading,
  };
};

type IFrameItem = {
  url: string;
  isLoading: boolean;
};

export const useIfraneNew = () => {
  const [iframeItems, setIframeItems] = useState<IFrameItem[]>([]);

  const addIframe = (url: string) => {
    setIframeItems([...iframeItems, { url, isLoading: true }]);
  };

  const removeIframe = (url: string) => {
    setIframeItems(iframeItems.filter((item) => item.url !== url));
  };

  return {
    iframeItems,
    addIframe,
    removeIframe,
  };
};
