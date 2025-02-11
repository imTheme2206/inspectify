import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type IFrameItem = {
  id: string;
  url: string;
};

type IFrameContextType = {
  iframeItems: IFrameItem[];
  addIframe: () => void;
  removeIframe: (id: string) => void;
  setIframeUrl: (id: string, url: string) => void;
};

const IFrameContext = createContext<IFrameContextType | undefined>(undefined);

export const useIFrame = () => {
  const context = React.useContext(IFrameContext);
  if (context === undefined) {
    throw new Error('useIFrame must be used within an IFrameProvider');
  }
  return context;
};

export const IFrameProvider = ({ children }: { children: React.ReactNode }) => {
  const [iframeItems, setIframeItems] = useState<IFrameItem[]>([]);

  const setIframeUrl = (id: string, url: string) => {
    setIframeItems(
      iframeItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            url,
          };
        }
        return item;
      })
    );
  };

  const addIframe = () => {
    setIframeItems([
      ...iframeItems,
      {
        id: uuidv4(),

        url: '',
      },
    ]);
  };

  const removeIframe = (id: string) => {
    setIframeItems(iframeItems.filter((item) => item.id !== id));
  };

  return (
    <IFrameContext.Provider
      value={{ iframeItems, addIframe, removeIframe, setIframeUrl }}
    >
      {children}
    </IFrameContext.Provider>
  );
};
