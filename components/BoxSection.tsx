export function BoxSection({
  title,
  items,
  children,
}: {
  title: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-5 m-1 gap-1 text-xs">
      <div className="h-full bg-blue-300 text-sky-800 p-1 font-bold col-span-2">
        {title}
      </div>
      <div className="col-span-3 bg-blue-100 p-1">
        {children}
        {items?.map((item, idx) => (
          <span key={idx}>
            {idx > 0 && ", "}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
