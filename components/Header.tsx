const navigation = [
  "Home",
  "Browse",
  "Search",
  "Invite",
  "Film",
  "Mail",
  "Blog",
  "Favorites",
  "Forum",
  "Groups",
  "Events",
  "Videos",
  "Music",
  "Classifieds",
];

export function Header() {
  return (
    <div className="bg-blue-800 text-white h-40 text-xs flex flex-col justify-between">
      <div className="flex items-center justify-between px-2 pt-2">
        <div className="flex items-center space-x-1">
          <span>MySpace.com</span>
          <span>|</span>
          <span>Home</span>
        </div>
        <form>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-1" htmlFor="web">
              <span>The Web</span>
              <input type="radio" value="web" id="web" name="web" />
            </label>
            <label className="flex items-center space-x-1" htmlFor="myspace">
              <span>MySpace</span>
              <input
                type="radio"
                value="myspace"
                id="myspace"
                name="myspace"
                checked
              />
            </label>
            <div className="flex space-x-2 items-end">
              <input type="text" className="px-1 py-[1px]" />
              <button
                type="button"
                className="bg-cyan-50 border border-neutral-500 text-black text-xxs px-2"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center space-x-1">
          <span>Help</span>
          <span>|</span>
          <span>SignUp</span>
        </div>
      </div>
      <nav className="bg-blue-400 text-center py-1">
        {navigation.map((item) => (
          <a
            href=""
            key={item}
            className={`after:content-["|"] after:pl-1.5 pl-1.5 last:after:content-[""] after:text-black hover:text-blue-700`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
}
