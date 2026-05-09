import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`
        w-full 
        max-w-6xl 
        mx-auto 
        px-5 sm:px-6 lg:px-8 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
