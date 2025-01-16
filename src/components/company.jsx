import bgGradient from '../assets/img/bg-gradient.png'
import companyImg from '../assets/img/company-img.png'

const Company = () => {
  return (
    <div className='bg-[#F3F6FF] pt-40  h-full'>
      <div className="bg-blue-700 mx-6 rounded-tl-[2rem] rounded-tr-[2rem] flex justify-center relative md:mx-11 lg:mx-16">
        <img src={bgGradient} alt="Gradient" className='w-full h-full opacity-80 bg-blue-700 rounded-tl-[2rem] rounded-tr-[2rem]'/>
        <div className='flex flex-col items-center absolute bottom-0'>
            <h1 className='text-[#FFFFFF] text-sm font-normal md:text-2xl md:font-medium lg:text-4xl lg:pt-4 xl:text-5xl xl:font-semibold 2xl:pt-0'>Ready to start Estimating</h1>
            <h1 className='text-[#FFFFFF] text-sm font-normal md:text-2xl md:font-medium lg:text-4xl xl:text-5xl xl:font-semibold'>contracts faster?</h1>
            <p className='text-[#FFFFFF] text-[4px] pb-1.5 md:text-[8px] md:pt-1 md:pb-9 lg:text-xs lg:pt-2 xl:text-sm xl:pt-5'>Citric powers 1 million+ contracts for the worlds fastest-growing bussinesses.</p>
            <img src={companyImg} alt="Company-Img" className='w-[80%] xsm:pt-2 md:pt-0 2xl:w-3/4 2xl:pt-3 3xl:pt-10 3xl:w-[80%]'/>
        </div>
      </div>
    </div>
  )
}

export default Company
