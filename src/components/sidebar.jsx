import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSolution } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { LuContact } from "react-icons/lu";
import LoginBtn1 from "./ui/login-btn1";
import SignUpBtn1 from "./ui/signup-btn1";

const Sidebar = () => {
  return (
    <div className="bg-transparent w-full absolute top-16">
      <div className="flex flex-col gap-y-1 w-2/5 bg-white divide-y rounded-lg float-end">
        <a href="#hero">
        <div className="flex items-center gap-x-3 pt-2 px-2">
          <IoHomeOutline />
          <h2 className="text-sm font-medium text-[#020817]">Home</h2>
        </div>
        </a>

        <a href="#solutions">
        <div className="flex items-center gap-x-3 pt-2 px-2">
          <AiOutlineSolution />
          <h2 className="text-sm font-medium text-[#020817]">Solution</h2>
        </div>
        </a>

       <a href="#pricing">
       <div className="flex items-center gap-x-3 pt-2 px-2">
          <FiDollarSign />
          <h2 className="text-sm font-medium text-[#020817]">Pricing</h2>
        </div>
       </a>

        <a href="#footer">
          <div className="flex items-center gap-x-3 pt-2 px-2">
          <LuContact />
          <h2 className="text-sm font-medium text-[#020817]">Contact</h2>
        </div>
        </a>

        <div className="flex justify-center gap-x-2.5 py-1.5">
          <LoginBtn1 title="Login" />
          <SignUpBtn1 />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
