import React from 'react'
import { NavLink } from "react-router-dom"
import Logo from '../assets/logo.png'

const navbar = () => {
  return (
    <header className="bg-[#8FC5FF] py-5">
      <div className="flex flex-col items-center gap-4">
        <img src={Logo} alt="logo" className="w-48 h-auto" />
        <nav className="flex items-center justify-center gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Produtos">Cardápio completo</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default navbar
