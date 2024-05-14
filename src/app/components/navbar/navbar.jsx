import React from 'react'
import "./navbar.css"
import Image from 'next/image'
// import logo from "../next.svg"
import Link from 'next/link'

const navBar = () => {
  return (
    <div className='nav'>
      <div className='logo'>
       <Link href="/">FINRITHUM</Link>
      </div>
      
      <nav className='navbar'>
        <ul className='list'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shadesgenarator">Crypto</Link></li>
          <li><Link href="/">Market</Link></li>
          <li><Link href="/ui-shades">News</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </nav>

      {/* <button className='btn'>CLICK HERE!</button> */}

    </div>
  )
}

export default navBar