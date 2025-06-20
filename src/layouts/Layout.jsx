import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      {/* Main content */}
      <Outlet />

      <Footer />
    </div>
  );
};
export default Layout;
