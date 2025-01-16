import logo from '../assets/img/logo.png'
import LoginBtn from './ui/login-btn'
import SignUpBtn from './ui/signup-btn'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#f9fbff8f] fixed top-0 w-full px-6 py-5  backdrop-blur-sm z-30 lg:p-3 lg:px-14 '>
      <img src={logo} alt="logo" className='w-32 h-auto md:w-48 lg:w-auto' />
      <ul className='hidden md:flex lg:flex lg:gap-5 xl:gap-14'>
        <li><a className='li-style' href="#hero" >Home</a></li>
        <li><a className='li-style' href="#solutions" >Solutions</a></li>
        <li><a className='li-style' href="#pricing" >Pricing</a></li>
        <li><a className='li-style' href="#footer" >Contact</a></li>
      </ul>
      <div className='flex gap-2 xl:gap-4'>
        <LoginBtn title="Login"/>
        <SignUpBtn/>
      </div>
      <FaBars className='md:hidden lg:hidden xl:hidden' />
    </div>
  )
}

export default Navbar
