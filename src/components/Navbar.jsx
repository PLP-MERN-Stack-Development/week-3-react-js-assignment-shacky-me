import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineTaskAlt } from "react-icons/md";

const Navbar = () => {
  // context to manage dark/light mode
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navlinks = [
    { path: "/", label: "Tasks" },
    { path: "/posts", label: "Posts" },
  ];

  return (
    <header className="w-fit mx-auto border border-[#f3ecec] shadow-md/25 rounded-full p-4 m-5">
      <nav className="flex justify-between items-center space-x-15 md:space-x-30 text-sm">
        {/* logo */}
        <Link to="/" className="flex items-center">
          <MdOutlineTaskAlt className="inline-block mr-2 text-xl" />
          <h1 className="font-bold text-lg">TaskApp</h1>
        </Link>
        {/* navigation links */}
        <ul className="inline-flex gap-5 mr-10 font-semibold">
          {navlinks.map((navlink) => (
            <li key={navlink.path}>
              <Link to={navlink.path}>{navlink.label}</Link>
            </li>
          ))}
        </ul>

        {/* dark/Light mode switch */}
        <div className="inline-flex space-x-2">
          <button onClick={toggleTheme} className="text-xl">
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>

          {/* respect System OS */}
          <button onClick={toggleTheme} className="text-xl">
            <HiOutlineComputerDesktop />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
