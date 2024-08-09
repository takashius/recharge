import { useStickyHeader } from '../../hooks'
import { Outlet } from "react-router-dom"
import Header from './header'
import Footer from './footer'
import '../../App.css'
import '../../main.css'

export default function Root() {
  useStickyHeader();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
