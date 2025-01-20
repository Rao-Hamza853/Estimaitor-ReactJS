import logo from "../assets/img/logo.png";
import { RiBillFill } from "react-icons/ri";
import profilePic from '../assets/img/profile-pic.png'
import { FaAngleDown } from "react-icons/fa6";

const BillNavbar = () => {
  return (
      <div className="flex items-center justify-between bg-[#f9fbff8f] fixed top-0 w-full px-6 h-16  backdrop-blur-sm z-30 lg:p-3 lg:px-16">
        <img src={logo} alt="logo" className="w-32 h-auto md:w-48 lg:w-auto" />
        
        <div className="flex gap-2 xl:gap-4 items-center  px-2 py-2 rounded-full">
          <div className="flex items-center gap-x-1.5 ">
          <RiBillFill className="text-[#333333]"/>
          <h2 className="text-lg text-[#333333] font-semibold">Billing History</h2>
          </div>
          <div className="w-[2px] h-5 bg-[#D9D9D9] rounded-xl opacity-70"></div>
          <div className="flex items-center gap-x-1.5">
            <img src={profilePic} alt="profile-pic" />
            <h2 className="text-lg text-[#333333] font-semibold">Adela Parkson</h2>
            <FaAngleDown className="text-[#292D32]"/>
          </div>
        </div>
      </div>
  );
};

export default BillNavbar;
// bg-[#f9fbff8f]