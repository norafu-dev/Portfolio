import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 z-50 flex items-start justify-between gap-8 px-4 py-4 mb-6 text-semibold font-loreka">
      <Link href="/" className="flex items-center h-7">
        HOME
      </Link>
      <Menu />
    </nav>
  );
};

export default Navbar;
