import React from 'react'

const navbar = () => {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/" end className={classe}>Home</NavLink>
          <NavLink to="/Produtos" className={classe}>Sorvetes</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default navbar
