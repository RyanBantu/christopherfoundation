import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import ScrollToTop from "./ScrollToTop"

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
