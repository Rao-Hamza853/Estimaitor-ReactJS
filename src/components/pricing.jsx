import { FaCheckCircle } from "react-icons/fa";
import LoginBtn from "./ui/login-btn";
import { useState } from "react";
import GetStartBtn1 from "./ui/get-start-btn1";

const Pricing = () => {
  const[isChecked, setIsChecked] = useState(false)
  return (
    <div className="bg-[#F3F6FF] h-full -mb-32 md:pt-20 md:-mt-10 lg:pt-20 lg:pb-20" id="pricing">
      <div className="flex flex-col items-center gap-y-3 md:gap-y-4 lg:gap-y-5">
        <p className="text-base text-[#020817]">Pricing Plan</p>
        <h1 className="text-3xl text-[#333333] font-bold pt-2 md:text-4xl">
          Ready to Get Started?
        </h1>
        <h1 className="text-3xl text-[#333333] font-bold text-center px-4 md:text-4xl">
          Don't Worry, We'll Keep You Under Budget
        </h1>
        <p className="text-base text-[#020817] text-center px-3">
          Get started with a 5-day trial, Cancel anytime.
        </p>
      </div>

      <div className="flex justify-center gap-x-4 pt-14">
            <p className="text-sm text-[#020817]">Annually</p>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" class="sr-only peer" value="" onClick={()=> setIsChecked(!isChecked)}/>
              <div class="group peer bg-[#E2E8F0] rounded-full duration-300 w-9 h-5 ring-2 ring-gray-100 after:duration-300 after:bg-white peer-checked:after:bg-white  peer-checked:bg-[#4169E1] after:rounded-full after:absolute after:h-4 after:w-4 after:top-0.5 after:left-0.5 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95"></div>
            </label>
            <p className="text-sm text-[#020817]">Monthly</p>
          </div>

      <div className="flex flex-col justify-center items-center gap-x-12 gap-y-12 mt-12 md:flex-row md:gap-x-5 md:px-12 lg:-mt-10 lg:gap-x-8 xl:gap-x-16">
        <div className="flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-14 p-12 md:p-10 bg-[#F3F6FF] drop-shadow-2xl rounded-2xl border-2 border-[#F3F6FF] hover:border-[#4169E1]">
          <h2 className="text-base text-[#020817] font-semibold">Standard</h2>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-[#4169E1] font-medium">{isChecked ? "$50" : "$100"}</h1>
            <h3 className="text-xs text-[#020817] font-semibold">{isChecked ? "per Month" : "per Year"}</h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2 text-left">
              <FaCheckCircle className="text-[#4169E1] bg-[#F1F1F1] rounded-full" />
              <p className="text-base text-[#020817]">
                20,000 Credits per month
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817] leading-tight">
                Full access to the <br /> newest upgrades
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817]">Priority email support</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817]">Custom AI Coding</p>
            </div>
          </div>
          <GetStartBtn1/>
          <p className="text-xs text-[#FFFFFF] bg-[#4169E1] px-3 py-1 rounded-xl absolute -top-3">
            Perfect for Commercial Use
          </p>
        </div>

          <div className="flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-14 p-12 md:p-10 lg:mt-20 bg-[#F3F6FF] drop-shadow-2xl rounded-2xl border-2 border-[#F3F6FF] hover:border-[#4169E1]">
            <h2 className="text-base text-[#020817] font-semibold">Gold</h2>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-[#4169E1] font-medium">{isChecked ? "$75" : "$200"}</h1>
              <h3 className="text-xs text-[#020817] font-semibold">{isChecked ? "per Month" : "per Year"}</h3>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex items-center gap-x-2">
                <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
                <p className="text-base text-[#020817]">
                  20,000 Credits per month
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
                <p className="text-base text-[#020817] leading-tight">
                  Full access to the <br /> newest upgrades
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
                <p className="text-base text-[#020817]">
                  Priority email support
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
                <p className="text-base text-[#020817]">Custom AI Coding</p>
              </div>
            </div>
            <GetStartBtn1/>
            <p className="text-xs text-[#FFFFFF] bg-[#4169E1] px-3 py-1 rounded-xl absolute -top-3">
              Perfect for Commercial Use
            </p>
          </div>

        <div className="flex flex-col items-center justify-center gap-10 md:gap-12 lg:gap-14 p-12 md:p-10 bg-[#F3F6FF] drop-shadow-2xl rounded-2xl border-2 border-[#F3F6FF] hover:border-[#4169E1]">
          <h2 className="text-base text-[#020817] font-semibold">Premium</h2>
          <div className="flex flex-col items-center">
            <h1 className="text-6xl text-[#4169E1] font-medium">{isChecked ? "$119" : "$300"}</h1>
            <h3 className="text-xs text-[#020817] font-semibold">{isChecked ? "per Month" : "per Year"}</h3>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817]">
                20,000 Credits per month
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817] leading-tight">
                Full access to the <br /> newest upgrades
              </p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817]">Priority email support</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaCheckCircle className="text-[#4169E1] bg-[#FFFFFF] rounded-full" />
              <p className="text-base text-[#020817]">Custom AI Coding</p>
            </div>
          </div>
          <GetStartBtn1/>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
