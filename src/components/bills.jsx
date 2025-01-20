import CancelPlanBtn from './ui/cancel-plan-btn'
import PaymentMethodBtn from './ui/payment-method-btn'
import visaLogo from '../assets/img/visa-logo.png'
import DefaultBtn from './ui/default-btn'
import { LiaEditSolid } from "react-icons/lia";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Bills = () => {
  return (
    <div className='bg-[#F3F5FA] pt-28 p-20'>
      <div className='bg-white py-10 px-16 space-y-14 rounded-3xl'>

        <div className='space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>CURRENT PLAN</p>
          <div className='flex justify-between'>
            <div className='space-y-2'>
              <h1 className='text-3xl text-[#333333] font-semibold'>Starter Price</h1>
              <p className='text-base text-black opacity-70'>$50.00 per month</p>
              <p className='text-base text-black opacity-70'>Your plan renews on January 02, 2022</p>
            </div>
            <div className='space-x-2'>
              <PaymentMethodBtn/>
              <CancelPlanBtn/>
            </div>
          </div>
        </div>
        
        <div className='space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>PAYMENT METHOD</p>
          <div className='flex items-center gap-x-4'>
            <div className='bg-[#0358A0] aspect-square w-8 px-1 flex justify-center items-center rounded-lg'>
              <img src={visaLogo} alt="visa-logo" />
            </div>
            <p className='text-xl text-black opacity-70 pr-12'>4242 **** **** 5816</p>
            <DefaultBtn />
          </div>
          <p className='text-lg text-[#4169E1] cursor-pointer'>+ Add Payment Method</p>
        </div>

        <div className='space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>BILLING AND SHIPPING INFORMATION</p>
            <div className='flex items-center gap-x-12'>
              <p className='text-xl text-black opacity-50'>Email</p>
              <p className='text-lg text-black opacity-90'>user@email.com</p>
            </div>
            <div className='flex items-center gap-x-2'>
            <LiaEditSolid className='text-xl text-[#4169E1]'/>
            <p className='text-lg text-[#4169E1]'>Update Information</p>
          </div>
        </div>

        <div className='space-y-6'>
         <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>INVOICE HISTORY</p>
          <div className='flex items-center gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
        </div>

        <div className='space-y-3 pb-20'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4 mb-6'>AVAILABLE PLANS</p>
          <div className='bg-[#F2F5FF] flex items-center gap-x-6 p-8 rounded-2xl mt-'>
            <div className='size-8 bg-yellow-700 rounded-full'>
            </div>
            <div className='space-y-1'>
              <h2 className='text-xl text-[#333333] font-semibold'>Monthly Plan</h2>
              <p className='text-sm text-[#000000] opacity-70'>Free</p>
            </div>
          </div>
          <div className='bg-[#F2F5FF] flex items-center gap-x-6 p-8 rounded-2xl'>
            <div className='size-8 bg-yellow-700 rounded-full'>
            </div>
            <div className='space-y-1'>
              <h2 className='text-xl text-[#333333] font-semibold'>Yearly Plan</h2>
              <p className='text-sm text-[#000000] opacity-70'>$39.90 / Per Month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bills
