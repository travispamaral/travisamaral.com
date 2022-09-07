const aboutMarkup = (
  <div className="text-xs h-full flex flex-col">
    <p>{`"supdawg"`}</p>
    <p>
      Male
      <br />
      32 years old
    </p>
    <p>Monterey, CA</p>
    <p className="mt-auto mb-4">
      Last updated: <br />
      9/6/2022
    </p>
  </div>
);

export function Bio() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div className="mt-4 col-span-3">
        <h1 className="font-bold">Travis</h1>
      </div>
      <div className="col-span-2">
        <div className="my-2 relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/headshot.jpg" alt="profile picture" height={170} />
        </div>
        <div className="flex items-center space-x-1 text-xs justify-center">
          <span>View my:</span>
          <a
            href=""
            className="font-bold text-blue-800 hover:text-red-700 hover:underline"
          >
            Pics
          </a>
          <span>|</span>
          <a
            href=""
            className="font-bold text-blue-800 hover:text-red-700 hover:underline"
          >
            Videos
          </a>
        </div>
      </div>
      {aboutMarkup}
    </div>
  );
}
