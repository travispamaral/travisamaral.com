import React, { Fragment } from "react";
import { Box } from "./";

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div className="grid grid-cols-3 p-1 gap-1 text-xs">
    <div className="h-full bg-blue-300 text-blue-700 p-1 font-bold">
      {title}
    </div>
    <div className="col-span-2 bg-blue-100 p-1">
      {items.map((item, idx) => (
        <span key={idx}>
          {idx > 0 && ", "}
          {item}
        </span>
      ))}
    </div>
  </div>
);

export function Interests() {
  return (
    <Box title="Interests">
      <Section title="General" items={["music", "cars", "beer", "tech"]} />
      <Section title="Music" items={["music", "cars", "beer", "tech"]} />
    </Box>
  );
}
