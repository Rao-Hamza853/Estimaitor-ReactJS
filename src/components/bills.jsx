import CancelPlanBtn from './ui/cancel-plan-btn'
import PaymentMethodBtn from './ui/payment-method-btn'
import visaLogo from '../assets/img/visa-logo.png'
import DefaultBtn from './ui/default-btn'
import { LiaEditSolid } from "react-icons/lia";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from 'react';
import UpdatePlanBtn from './ui/update-plan-btn';
import UpdatePlanBtn1 from './ui/update-plan-btn1';

const Bills = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [isCheck1, setIsCheck1] = useState(false)
  return (
    <div className='bg-[#F3F5FA] pt-24 p-6 md:p-10 md:pt-28 lg:p-16 lg:pt-28'>
      <div className='bg-white py-7 px-8 space-y-14 rounded-3xl lg:py-10 lg:px-16'>

        <div className='space-y-4 md:space-y-6'>
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
        </div>
        
        <div className='space-y-4 md:space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>PAYMENT METHOD</p>
          <div className='flex items-center gap-x-4'>
            <div className='bg-[#0358A0] aspect-square w-8 px-1 flex justify-center items-center rounded-lg'>
              <img src={visaLogo} alt="visa-logo" />
            </div>
            <p className='text-base text-black opacity-70 md:pr-12 lg:text-lg'>4242 **** **** 5816</p>
            <DefaultBtn/>
          </div>
          <p className='text-base text-[#4169E1] lg:text-lg cursor-pointer'>+ Add Payment Method</p>
        </div>

        <div className='space-y-4 md:space-y-6'>
          <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>BILLING AND SHIPPING INFORMATION</p>
            <div className='flex items-center gap-x-6 md:gap-x-12'>
              <p className='text-lg text-black opacity-50 lg:text-xl'>Email</p>
              <p className='text-base text-black opacity-90 lg:text-lg'>user@email.com</p>
            </div>
            <div className='flex items-center gap-x-2'>
            <LiaEditSolid className='text-xl text-[#4169E1]'/>
            <p className='text-base text-[#4169E1] lg:text-lg'>Update Information</p>
          </div>
        </div>

        <div className='space-y-6 overflow-x-auto'>
         <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4'>INVOICE HISTORY</p>
          <div className='flex items-center gap-x-20 lg:gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-20 lg:gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-20 lg:gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
          <div className='flex items-center gap-x-20 lg:gap-x-40'>
            <div className='flex items-center gap-x-2'>
              <p className='text-xl text-black opacity-70'>Dec 01, 2021</p>
              <LuCircleArrowOutUpRight className='text-black opacity-70'/>
            </div>
            <p className='text-xl text-black opacity-70'>$50.00</p>
            <button className='px-2.5 py-1 text-[#4169E1] text-sm bg-[#D9E1F9] rounded-md hover:bg-[#c9d1e8]'>Active</button>
            <p className='text-xl text-black opacity-70'>Starter Price</p>
          </div>
        </div>

        <div className='space-y-2 md:space-y-3 pb-14 lg:pb-20'>
          <div className='flex items-start justify-between'>
            <p className='text-xl text-black opacity-70 font-[450] border-b border-[#E6EAF9] pb-4 mb-3 lg:mb-7'>AVAILABLE PLANS</p>
            <UpdatePlanBtn/>
          </div>
          <div className='bg-[#F2F5FF] flex items-center gap-x-6 p-4 rounded-2xl lg:p-8'>
            <div onClick={()=>setIsCheck(!isCheck)} className='size-8 bg-white rounded-full border-1 border-[#DADADA]'>
              {isCheck ? <FaCheckCircle className='size-8 text-[#4169E1]' /> : null}
            </div>
            <div className='space-y-1'>
              <h2 className='text-xl text-[#333333] font-semibold'>Monthly Plan</h2>
              <p className='text-sm text-[#000000] opacity-70'>Free</p>
            </div>
          </div>
          <div className='bg-[#F2F5FF] flex items-center gap-x-6 p-4 rounded-2xl lg:p-8'>
            <div onClick={()=>setIsCheck1(!isCheck1)} className='size-8 bg-white rounded-full border-1 border-[#DADADA]'>
              {isCheck1 ? <FaCheckCircle className='size-8 text-[#4169E1] '/> : null}
            </div>
            <div className='space-y-1'>
              <h2 className='text-xl text-[#333333] font-semibold'>Yearly Plan</h2>
              <p className='text-sm text-[#000000] opacity-70'>$39.90 / Per Month</p>
            </div>
          </div>
          <UpdatePlanBtn1/>
        </div>
      </div>
    </div>
  )
}

export default Bills
