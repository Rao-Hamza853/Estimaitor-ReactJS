import { useRef, useState } from "react";
import logo from "../assets/img/logo.png";
import Sidebar from "./sidebar";
import LoginBtn from "./ui/login-btn";
import SignUpBtn from "./ui/signup-btn";
import { FaBars } from "react-icons/fa6";
import { useOnClickOutside } from "../hooks/use-on-click-outside";

const Navbar = () => {
  const menuRef = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(false)
  useOnClickOutside(menuRef, () => setToggleMenu(false));
  return (
    <div className="">
      <div className="flex items-center justify-between bg-[#f9fbff8f] fixed top-0 w-full px-6 h-16  backdrop-blur-sm z-30 lg:p-3 lg:px-14 ">
        <img src={logo} alt="logo" className="w-32 h-auto md:w-48 lg:w-auto" />
        <ul className="hidden md:flex lg:flex lg:gap-5 xl:gap-14">
          <li>
            <a className="li-style" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="li-style" href="#solutions">
              Solutions
            </a>
          </li>
          <li>
            <a className="li-style" href="#pricing">
              Pricing
            </a>
          </li>
          <li>
            <a className="li-style" href="#footer">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-2 xl:gap-4">
          <LoginBtn title="Login" />
          <SignUpBtn />
        </div>
        <FaBars
          className="md:hidden lg:hidden xl:hidden"
          onClick={() => setToggleMenu(true)}
        />
      </div>
      {toggleMenu ? (
        <div 
        ref={menuRef}
        className="fixed w-full z-40">
          <Sidebar />
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
