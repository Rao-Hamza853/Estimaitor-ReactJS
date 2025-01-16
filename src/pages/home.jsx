import Benefits from "../components/benefits"
import Company from "../components/company"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Pricing from "../components/pricing"
import Solution from "../components/solution"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Solution/>
    <Benefits/>
    <Pricing/>
    <Company/>
    <Footer/>
    </>
  )
}

export default Home
