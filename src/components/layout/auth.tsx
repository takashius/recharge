import { useStickyHeader, useSmoothScroll } from '../../hooks'
import { Outlet } from "react-router-dom"
import Header from './headerAuth'
import Footer from './footer'
import '../../App.css'
import '../../main.css'

export default function Auth() {
  useStickyHeader();
  useSmoothScroll();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
