import React from 'react'
import { NavLink } from "react-router-dom"

const navbar = () => {
  return (
    <header className="bg-[#8FC5FF] py-5">
      <div className="flex flex-col items-center gap-4">
        <nav className="flex items-center justify-center gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Produtos">Sorvetes</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default navbar
