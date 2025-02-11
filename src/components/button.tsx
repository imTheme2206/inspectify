import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="flex items-center gap-x-1 bg-primary-400 px-4 py-2 hover:bg-primary-300 transition rounded-lg cursor-pointer"
    >
      {children}
    </button>
  );
};
