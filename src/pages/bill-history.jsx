import Bills from '../components/bills'
import BillNavbar from '../components/bill-navbar'
import { useEffect } from 'react'

const BillHistory = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
    <BillNavbar/>
    <Bills/> 
    </>
  )
}

export default BillHistory
