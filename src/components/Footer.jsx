import { MdOutlineTaskAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className="border-1 border-gray-200 w-full" />
      {/* logo */}
      <div className="flex justify-center items-center m-4">
        <Link to="/" className="flex items-center">
          <MdOutlineTaskAlt className="inline-block mr-2 text-xl" />
          <h1 className="font-bold text-lg">TaskApp</h1>
        </Link>
      </div>

      <div className="text-center text-sm text-gray-500 h-16">
        <p>&copy; {new Date().getFullYear()} TaskApp. All rights reserved.</p>
        <p>
          Built with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            React
          </a>
          . Designed by Meshack Kigen
        </p>
      </div>
    </div>
  );
};
export default Footer;
