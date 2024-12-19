const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
]

const NavItem = ({ name, href }: { name: string, href: string }) => {
  return (
    <li className="justify-center py-0.5 px-1.5 before:block before:absolute before:h-full before:w-full before:scale-y-0 before:bg-black relative inline-flex items-center group hover:before:scale-y-100 before:transition-all before:duration-250 before:rounded-lg before:origin-bottom">
      <a className="relative text-black group-hover:text-white" href={href}>{name}</a>
    </li>
  )
}

export default function Header() {
  return (
    <>
    <header className="sticky top-2 left-0 right-0 py-4 flex justify-between items-center w-full">
      <p className="font-bold">TA</p>
        <menu className="flex gap-4 list-none">
          {navItems.map((item) => (
            <NavItem key={item.name} name={item.name} href={item.href} />
          ))}
        </menu>
      </header>
      </>
  );
}
