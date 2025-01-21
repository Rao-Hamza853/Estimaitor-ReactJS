import { CiEdit } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import profilePic1 from '../assets/img/profile-pic1.png'

const MyProfile = () => {
  return (
    <div className='bg-[#F3F5FA] pt-24 p-6 md:p-10 md:pt-28 lg:p-16 lg:pt-28'>
      <div className='bg-white py-7 px-8 space-y-7 rounded-3xl lg:py-10 lg:px-16'>

        <div className='flex justify-between cursor-pointer'>
            <p className='text-lg text-black opacity-70 font-[450] md:text-xl'>My Profile</p>
            <div className='flex items-center border-2 border-[#EEEEEE] rounded-3xl px-2 py-0.5 md:px-3 hover:bg-[#EEEEEE]'>
              <p className='text-black opacity-70 text-lg'>Edit</p>
              <CiEdit className='size-5'/>
            </div>
        </div>

        <div className="flex flex-col gap-y- border rounded-3xl px-5 pt-1 pb-3 md:flex-row ">
            <img src={profilePic1} alt="profile-pic" className="size-24 -mb- lg:-mb-11 -mt-0 lg:-mt-2 -ml-5 lg:-ml-2 "/>
            <div className="md:space-y-2">
                <h3 className="text-lg text-[#333333] font-semibold md:text-2xl">Adela Parkson</h3>
                <p className="text-sm text-black opacity-70 lg:text-base">adelaparkson@gmail.com</p>
                <div className="flex items-center">
                    <FaLocationDot />
                    <p className="text-sm text-black opacity-50">United Kingdom</p>
                </div>
            </div>
        </div>
        {/* <div className='space-y-4 md:space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>CURRENT PLAN</p>
          <div className='flex flex-col gap-3 md:justify-between md:flex-row'>
            <div className='space-y-2'>
              <h1 className='text-3xl text-[#333333] font-semibold'>Starter Price</h1>
              <p className='text-base text-black opacity-70'>$50.00 per month</p>
              <p className='text-base text-black opacity-70'>Your plan renews on January 02, 2022</p>
            </div>
            <div className='flex flex-col items-start gap-2 lg:flex-row'>
              <PaymentMethodBtn/>
              <CancelPlanBtn/>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default MyProfile
