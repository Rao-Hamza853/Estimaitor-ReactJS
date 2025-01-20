import blueBg from '../assets/img/blue-bg.png'
import benefitCard1 from '../assets/img/benefit-card1.png' 
import benefitCard2 from '../assets/img/benefit-card2.png' 

const Benefits = () => {
    const array = Array.from({ length: 45 }, (_, index) => index);
    const array1 = Array.from({ length: 25 }, (_, index) => index);
  return (
    <div className='bg-[#F3F5FA] pt-8 lg:pt-20 pb-24 h-full relative'>
        <img src={blueBg} alt="blue-bg"  />
        <img src={benefitCard1} alt="benefit-card1" className='w-2/5 absolute -top-2 left-3 z-20 md:left-8 lg:top-10 '/>
        <div className='absolute top-14 right-[4.5rem] space-y-2 md:space-y-5 md:top-20 md:right-44 lg:top-32 lg:right-56 xl:space-y-6 xl:top-40 xl:right-[22rem]'>
            <h1 className='text-[8px] font-medium text-[#FFFFFF] md:text-sm lg:text-lg xl:text-2xl'>Benefits For EstimAitor</h1>
            <p className='text-[5px] font-extralight text-[#ffffff] opacity-60 leading-[10px] md:text-[8px] md:opacity-80 md:leading-4 lg:text-xs lg:leading-5 lg:opacity-100 xl:text-sm xl:leading-6'>Apply differential privacy to ensure the strongest degree <br /> of protection and satisfy the requirements of GDPR, <br /> CCPA, HIPAA, and every other regulation on the horizon.</p>
        </div>
        <div className='border-2 border-[#FFBA49] size-[5.5rem] rounded-full absolute top-12 left-12 z-10 md:size-40 md:top-28 md:left-[6.5rem] lg:border-4 lg:size-56 lg:top-44 lg:left-32 xl:border-4 xl:size-72 xl:top-64 xl:left-44'>
        </div>
        {/* <div className='border-4 border-[#FFBA49] w-12 h-12 rounded-full absolute top-64 left-9'>
        </div> */}
        <div class="grid grid-cols-5 gap-x-3 gap-y-2 w-1/12 absolute bottom-48 left-14 md:gap-x-6 md:gap-y-4 md:bottom-56 md:left-28 lg:gap-x-7 lg:gap-y-5 lg:bottom-72 lg:left-36 xl:gap-x-10 xl:gap-y-8 xl:bottom-[22rem] xl:left-[162px]">
        {
            array.map((item)=>(
             <div class="size-0.5 bg-[#70C217] rounded-full md:size-1 xl:size-1.5"></div>
            ))
        }



            {/* <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div> */}
        </div>


        <img src={benefitCard2} alt="benefit-card2" className='w-[27%] absolute bottom-24 right-16 z-10 opacity-90 md:right-20 lg:right-32 xl:right-40'/>
        <div className='absolute bottom-28 left-24 space-y-2 md:bottom-40 md:left-64 md:space-y-5 lg:bottom-48 lg:left-80 xl:space-y-6 xl:bottom-72 xl:left-[30rem]'>
            <h1 className='text-[7px] font-medium text-[#FFFFFF] md:text-sm lg:text-lg xl:text-2xl'>Keep PII/PHI out of your <br /> lower environments.</h1>
            <p className='text-[5px] font-extralight text-[#ffffff] opacity-60 leading-[10px] md:text-[8px] md:opacity-80 md:leading-4 lg:text-xs lg:leading-5 lg:opacity-100 xl:text-sm xl:leading-6'>Automate sensitive data detection and schema <br /> change alerts, to protect against leaks and <br /> breaches.</p>
        </div>
        <div className='border-2 border-[#FFBA49] size-14 rounded-full absolute bottom-40 right-11 md:size-24 md:bottom-56 md:right-11 lg:border-4 lg:size-40 lg:right-14 xl:size-48 xl:bottom-80 xl:right-20'>
        </div>
        <div className='border-2 border-[#FFBA49] size-4 rounded-full absolute bottom-[12.5rem] right-32 md:size-6 md:bottom-[19rem] md:right-48 lg:border-4 lg:size-10 lg:bottom-[23rem] lg:right-72 xl:size-14 xl:bottom-[30rem] xl:right-96'>
        </div>
        <div class="grid grid-cols-5 gap-x-3 gap-y-2 w-1/12 absolute bottom-32 right-14 md:gap-x-6 md:gap-y-4 md:bottom-40 md:right-16 lg:gap-x-7 lg:gap-y-5 lg:bottom-40 lg:right-20 xl:gap-x-10 xl:gap-y-8 xl:bottom-44 xl:right-28">
        {
            array1.map((item)=>(
                <div class="size-0.5 bg-[#70C217] rounded-full md:size-1 xl:size-1.5"></div>
            ))
        }
            {/* <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div>
            <div class="w-1.5 h-1.5 bg-[#70C217] rounded-full"></div> */}
        </div>
    </div>
  )
}

export default Benefits


// const array = Array.from({ length: 50 }, (_, index) => index);

// const result = array.map((item) => {
 
//  <Div>
// });