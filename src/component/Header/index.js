import React from 'react'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
          <nav>
              <Link to="/contact" > Contact</Link>
              <Link to="/home" > Home</Link>
              <Link to="/login" > Login</Link>
          </nav>
    </div>
  )
}
