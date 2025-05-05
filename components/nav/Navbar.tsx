import Link from "next/link";
import ModeToggle from "./ModeToggle";

const ROUTES = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Project",
    href: "/project",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-8 py-4 mb-6 text-xl text-semibold">
        {ROUTES.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
