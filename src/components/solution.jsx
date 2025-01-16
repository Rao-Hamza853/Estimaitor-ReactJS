import card1 from '../assets/img/card1.png'
import card2 from '../assets/img/card2.png'
import card3 from '../assets/img/card3.png'
const Solution = () => {
  return (
    <div className=" bg-[#F3F6FF] h-full space-y-16 pt-28 pb-20"  id="solutions">
      <div className='flex flex-col items-center gap-y-7'>
      <h1 className="text-[#333333] text-3xl font-bold text-center md:text-5xl">Key Features of <br/>EstimAitor Assistant</h1>
      <p className="text-[#020817] text-base text-center opacity-75 md:px-48 w-80 md:text-lg md:w-auto lg:px-32">Effortlessly create contracts in seconds. Create custom contracts in just a <br/> few clicks. Simplify and enhance efficiency with AI personalised contract <br/> with no templates</p>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row md:items-end md:justify-center md:gap-9 lg:gap-12'>
        <div className='w-auto space-y-5 md:w-[24%]  xl:w-[27%]'>
            <img src={card1} alt="card1" className=''/>
            <h1 className='text-2xl text-[#333333] font-bold md:pl-5 text-center md:text-left lg:text-3xl lg:w-36 xl:w-auto'>Core <span className='text-[#4169E1]'> Planning </span></h1>
            <p className='text-base text-[#020817] px-8 md:pl-4 text-center md:text-left lg:text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consut.</p>
            <p className='text-base font-semibold text-[#4169E1] pl-5 text-center md:text-left lg:text-lg cursor-pointer'>Learn More &gt;</p>
        </div>
        <div className='w-auto space-y-5 md:w-[24%] xl:w-[26%]'>
            <img src={card2} alt="card2" />
            <h1 className='text-2xl text-[#333333] font-bold md:pl-7 text-center md:text-left lg:text-3xl'>Traditional <span className='text-[#4169E1]'> Designs </span></h1>
            <p className='text-base text-[#020817] px-8 md:pl-5 text-center md:text-left lg:text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consut.</p>
            <p className='text-base font-semibold text-[#4169E1] pl-5 text-center md:text-left lg:text-lg cursor-pointer'>Learn More &gt;</p>
        </div>
        <div className='w-auto space-y-5 md:w-[24%] xl:w-[26%]'>
            <img src={card3} alt="card3" />
            <h1 className='text-2xl text-[#333333] font-bold md:pl-7 text-center md:text-left lg:text-3xl'>Quality <span className='text-[#4169E1]'> Materials </span></h1>
            <p className='text-base text-[#020817] px-8 md:pl-5 text-center md:text-left lg:text-lg'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consut.</p>
            <p className='text-base font-semibold text-[#4169E1] pl-5 text-center md:text-left lg:text-lg cursor-pointer'>Learn More &gt;</p>
        </div>
      </div>
    </div>
  )
}

export default Solution