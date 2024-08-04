import { useStickyHeader, useSmoothScroll } from '../../hooks'
import { Outlet } from "react-router-dom"
import Header from './header'
import Footer from './footer'
import '../../index.css'

export default function Root() {
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
