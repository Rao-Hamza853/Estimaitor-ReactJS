import logo from "../assets/img/logo.png";
import { FaPaperPlane } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import GetStartBtn2 from "./ui/get-start-btn2";

const Footer = () => {
  return (
    <div className="bg-[#E9EEFD] h-full flex flex-col gap-y-8 p-6 pt-10 md:px-16" id="footer">
      <div className="flex flex-col items-start gap-y-4 md:flex-row md:gap-x-14 lg:justify-between xl:gap-y-10 ">
          <img src={logo} alt="logo" className="w-40 object-cover"/>
          <div className="flex items-center gap-3 lg:gap-5">
            <p className="text-base text-[#17141F]">Ready to get started?</p>
            <GetStartBtn2/>
          </div>
      </div>
          
      <div className=" grid grid-cols-1 gap-y-9 lg:grid-cols-3 gap-x-5 ">
          <p className="text-base text-[#17141F] text-justify line-clamp-2 lg:line-clamp-none">
            The ultimate AI-powered analysis of property documents utilizes
            natural language processing to extract key details such as
            ownership, legal clauses, and zoning regulations. It automates the
            review process, identifies inconsistencies, and provides
            insights into property history and compliance, enhancing accuracy
            and efficiency in real estate transactions.
          </p>
        
        <div className="flex flex-col lg:items-center pb-2">
          <div className="flex flex-col gap-3">
          <p className="text-lg text-[#17141F] font-bold">Quick Link</p>
          <div className="flex flex-col gap-y-3">
          <a className="text-sm text-[#17141F]" href="#hero">
            Home
          </a>
          <a className="text-sm text-[#17141F]" href="#solutions">
            Solution
          </a>
          <a className="text-sm text-[#17141F]" href="#pricing">
            Pricing
          </a>
          <a className="text-sm text-[#17141F]" href="">
            Login
          </a>
          <a className="text-sm text-[#17141F]" href="">
            Signup
          </a>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className="text-2xl text-[#020817] font-bold">
            Subscribe to our newsletter
          </h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-3 border border-[#4169E1] rounded-tl-md rounded-bl-md border-r-0 focus:outline-none bg-transparent w-full"
            />
            <div className="group px-4 bg-[#4169E1] hover:bg-transparent  border border-[#4169E1] rounded-tr-md rounded-br-md border-l-0 flex justify-center items-center">
              <FaPaperPlane className="fill-[#FFFFFF] group-hover:fill-[#4169E1] text-xl" />
            </div>
          </div>
          <div className="flex gap-x-5 pb-3">
            <FaFacebookF className="hover:text-[#4169E1] cursor-pointer" />
            <FaTwitter className="hover:text-[#4169E1] cursor-pointer" />
            <FaGithub className="hover:text-[#4169E1] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-[10px] text-[#020817] text-center border-t-2 pt-7 border-[#d1d5db]">© 2025 All Rights Reserved by EstimAitor | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
