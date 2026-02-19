"use client"
import React from 'react'
import Link from 'next/link'

    
          

const Navigations = () => {

  return(

    <div>
      <nav className=''>
        <ul className='flex flex-row gap-4'>
          <li><Link href="/">home</Link></li>
            <li><Link href="/product">products</Link></li>
              <li><Link href="/aboutUs">aboutUs</Link></li>
                  <li><Link href="/service">service</Link></li>
                      <li><Link href="/contact">contact</Link></li>
                       <li><Link href="/clientComponent">clientComponent</Link></li>
                        <li><Link href="/serverComponent">serverComponent</Link></li>
        </ul>
      </nav>
    </div>
  )
}


export default Navigations