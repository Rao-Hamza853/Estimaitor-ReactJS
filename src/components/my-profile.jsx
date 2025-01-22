import { CiEdit } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import profilePic1 from '../assets/img/profile-pic1.png'
import { FaCheckCircle } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { RxDownload } from "react-icons/rx";
import { billingHistory } from "../constants/constants";

const MyProfile = () => {
  return (
    <div className='bg-[#F3F5FA] pt-24 p-6 md:p-10 md:pt-28 lg:p-16 lg:pt-28'>
      <div className='bg-white py-7 px-8 space-y-4 rounded-3xl lg:py-10 lg:px-16 md:space-y-6 lg:space-y-7'>

        <div className='flex justify-between cursor-pointer'>
            <p className='text-lg text-black opacity-70 font-[450] md:text-xl'>My Profile</p>
            <div className='flex items-center border-2 border-[#EEEEEE] rounded-3xl px-2 py-0.5 md:px-3 hover:bg-[#EEEEEE]'>
              <p className='text-black opacity-70 text-base lg:text-lg'>Edit</p>
              <CiEdit className='size-4 lg:size-5'/>
            </div>
        </div>

        <div className="flex flex-col border rounded-3xl px-6 pt-1 pb-3 md:flex-row md:items-center ">
            <img src={profilePic1} alt="profile-pic" className="size-24 -mb-3 -mt-0 -ml-5 md:size-32 md:mt-2.5 lg:size-48 lg:-mb-11 lg:-mt-2 lg:-ml-8 "/>
            <div className="space-y-1 lg:space-y-2">
                <h3 className="text-lg text-[#333333] font-semibold md:text-2xl">Adela Parkson</h3>
                <p className="text-sm text-black opacity-70 lg:text-base">adelaparkson@gmail.com</p>
                <div className="flex items-center">
                    <FaLocationDot />
                    <p className="text-sm text-black opacity-50">United Kingdom</p>
                </div>
            </div>
        </div>
        
        <div className="space-y-5 md:space-y-8 border rounded-3xl px-6 py-4 md:px-9 md:py-8"> 
          <h2 className="text-lg text-[#333333] font-semibold md:text-2xl">Personal Information</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:w-[80%] xl:w-[60%]">
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">First Name</p>
              <p className="text-base text-black opacity-70 font-medium">Adela</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">Last Name</p>
              <p className="text-base text-black opacity-70 font-medium">Parkson</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">Email Address</p>
              <p className="text-base text-black opacity-70 font-medium">adlaprksn@gmail.com</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">Phone</p>
              <p className="text-base text-black opacity-70 font-medium">+1 444 777 999</p>
            </div>
          </div>
        </div>

        <div className="space-y-5 md:space-y-8 border rounded-3xl px-6 py-4 md:px-9 md:py-8"> 
          <h2 className="text-lg text-[#333333] font-semibold md:text-2xl">Address</h2>
          <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:w-[80%] xl:w-[60%]">
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">Country</p>
              <p className="text-base text-black opacity-70 font-medium">United Kingdom</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">City/State</p>
              <p className="text-base text-black opacity-70 font-medium">Leeds, East London</p>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm text-black opacity-50">Postal Code</p>
              <p className="text-base text-black opacity-70 font-medium">ERT 2354</p>
            </div>
          </div>
        </div>

        <div className=" md:space-y- border rounded-3xl px-6 py-4 md:px-9 md:py-8"> 
          <h2 className="text-lg text-[#333333] font-semibold md:text-2xl mb-8">Billing History</h2>
          <div className="overflow-x-auto">
            <div className="flex justify-between gap-x-32 md:gap-x-36 2xl:gap-x-64 3xl:gap-x-[17.7rem] p-4 w-fit bg-[#F2F5FF] border border-[#E5E8F2] rounded-xl ">
              <p className="text-sm text-black opacity-50">Invoice</p>
              <p className="text-sm text-black opacity-50">Date</p>
              <p className="text-sm text-black opacity-50">Status</p>
              <p className="text-sm text-black opacity-50 pr-24 -mr-14 lg:pr-7 lg:-mr-0 2xl:pr-9 2xl:-ml-2">Download</p>
            </div>      
              {
                billingHistory.map((item) => (
                  <div className="flex justify-between gap-x-12 md:gap-x-16 lg:gap-x-1 py-4 md:py-5 border-b">
                      <div className="flex items-center gap-1">
                        <AiFillFileText className="text-lg"/>
                        <p className="text-base text-black opacity-70 font-medium w-20">{item.inviceNo}</p>
                      </div>
                      <div className="flex items-center lg:ml-8">
                        <p className="text-base text-black opacity-70 font-medium w-28">{item.date}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-[#E8EDFB] py-2 px-2 rounded-lg lg:ml-5">
                        <FaCheckCircle className=' text-[#4169E1]' />
                        <p className="text-base text-black opacity-70 font-medium">Completed</p>
                      </div>
                      <div className="flex items-center gap-1 bg-[#F5F5F5] py-2 px-2 rounded-lg cursor-pointer">
                        <RxDownload  className="text-lg"/>
                        <p className="text-base text-black opacity-70 font-medium w-32">Download PDF</p>
                      </div>
                  </div>
                  
                ))
              }
          </div>
        </div>
      </div>
      <p className="text-[10px] text-[#17141F] text-center mt-7 md:mt-9 md:-mb-2 lg:mt-10 lg:-mb-6">© 2025 All Rights Reserved by EstimAitor  |  Privacy Policy</p>
    </div>
  )
}

export default MyProfile