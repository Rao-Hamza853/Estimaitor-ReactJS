import logo from "../assets/img/logo.png";
import { RiBillFill } from "react-icons/ri";
import profilePic from "../assets/img/profile-pic.png";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router";

const BillNavbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#f9fbff8f] fixed top-0 w-full px-6 h-16  backdrop-blur-sm z-30 md:px-10 lg:p-3 lg:px-16">
      <img src={logo} alt="logo" className="w-32 h-auto md:w-48 lg:w-auto" />

      <div className="flex gap-2 xl:gap-4 items-center px-2 py-2">
        <div className="flex items-center gap-x-1.5 cursor-pointer relative group">
          <RiBillFill className="text-[#333333] size-6 lg:size-7" />
          <h2 className="text-lg text-[#333333] font-semibold hidden md:block">
            Billing History
          </h2>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-800 text-white text-sm rounded px-2 py-1">
            Billing History
          </div>
        </div>
        <div className="w-[2px] h-5 bg-[#D9D9D9] rounded-xl opacity-70"></div>
        <Link to="/profile">
        <div className="flex items-center gap-x-1.5 cursor-pointer relative group">
          <img src={profilePic} alt="profile-pic" className="size-8 lg:size-auto"/>
          <h2 className="text-lg text-[#333333] font-semibold hidden md:block">
            Adela Parkson
          </h2>
          <FaAngleDown className="text-[#292D32] hidden md:block" />
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-800 text-white text-sm rounded px-2 py-1">
            Profile
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default BillNavbar;
// bg-[#f9fbff8f]
