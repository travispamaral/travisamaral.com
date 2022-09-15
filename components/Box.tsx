import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Box({ title, children }: Props) {
  return (
    <div className="border-2 border-blue-400">
      <div className="bg-blue-400 text-white">
        <p className="pl-2 py-0.5 font-bold text-xs">{title}</p>
      </div>
      {children}
    </div>
  );
}
