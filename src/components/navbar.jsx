import React from 'react'

const navbar = () => {
  return (
    <header className="bg-[#8FC5FF] py-5">
      <div className="flex flex-col items-center gap-4">
        <nav className="flex items-center justify-center gap-10">
          <NavLink to="/" end className={classe}>Home</NavLink>
          <NavLink to="/Produtos" className={classe}>Sorvetes</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default navbar
