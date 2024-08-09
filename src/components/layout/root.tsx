import { useStickyHeader } from 'src/hooks'
import { Outlet } from "react-router-dom"
import Header from './header'
import Footer from './footer'
import 'src/App.css'
import 'src/main.css'

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
