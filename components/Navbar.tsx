import Link from "next/link";

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
      <ul className="flex items-center justify-center gap-8 py-4 mb-6 text-xl text-semibold">
        {ROUTES.map((route) => (
          <li key={route.href}>
            <Link href={route.href}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
