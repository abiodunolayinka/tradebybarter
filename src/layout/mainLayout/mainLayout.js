import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/ui/footer/footer'
import Header from '../../components/ui/header/header'
const MainLayout = () => {
  return (
    <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/> 
    </>
  )
}

export default MainLayout