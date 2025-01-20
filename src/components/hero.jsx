import { Link } from "react-router"
import GetStartBtn from "./ui/get-start-btn"


const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-y-7 bg-[#F3F5FA] pt-36 pb-14 h-full" id="hero">
      <h1 className="text-[#020817] text-3xl font-bold text-center md:text-6xl">The AI-Powered <br/> <span className="px-2">Pre-Construction Software</span></h1>
      <p className="text-[#020817] text-xl text-center  w-80 md:w-auto">Automatically detect, measure, compare and label project spaces and <br/>features on architectural plans and drawings in seconds, not hours.</p>
      <Link to="/bill">
      <GetStartBtn/>
      </Link>
    </div>
  )
}

export default Hero
