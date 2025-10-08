import { Outlet } from 'react-router-dom'
import { Header } from '../../header/jsx/Header'
import { Footer } from '../../footer/jsx/Footer'

export const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
