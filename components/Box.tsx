import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Box({ title, children }: Props) {
  return (
    <div className="border-2 border-sky-600 mt-4">
      <div className="bg-sky-600 text-white">
        <p className="pl-2 py-0.5 font-bold text-xs">Contact Information</p>
      </div>
      {children}
    </div>
  );
}
