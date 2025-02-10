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
