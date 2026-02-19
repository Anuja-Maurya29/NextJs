"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
    import { IoMdMenu } from "react-icons/io"
    import { RxCross1 } from "react-icons/rx";
    import { playfair } from '@/app/fonts'
          

const Navigations = () => {
  const [isMobileMenuOpen,setIsMobileMenuOpen] =useState(false)
  return (
   <header className='sticky top-0 z-50 bg-[#43291c] overflow-hidden'>
  
      <div className=' max-w-7xl mx-auto left-0 w-full px-4 md:px-8 py-3 flex justify-between items-center gap-4  h-20'>
       <div className="logo flex items-center gap-3">
 <Image
  src="/logo.png"
  alt="Crumbs and Creations logo"
  width={120}
  height={120}
  className=" object-contain"
/>
  <p className={` text-lg md:text-xl font-semibold text-[#debd94] whitespace-nowrap ${playfair.className}`}>
    Crumbs & Creations
  </p>
</div>

        <nav className="hidden lg:flex">
            <ul className='flex gap-8 font-medium text-[#debd94] text-base  text-shadow-2xs'  >
                 <li><Link href="/" className='hover:text-white transition'>Home</Link></li>
                <li><Link href="/aboutUs" className='hover:text-white transition'>About</Link></li>
                 <li><Link href="/shop" className='hover:text-white transition'>Shop</Link></li>
                  <li><Link href="/contactUs" className='hover:text-white transition'>Contact</Link></li>
                   
                
            </ul>
        </nav>
    
            <button className="bg-[#debd94] hidden md:block text-black rounded-xl px-6 h-10">get started</button>
      
{/* mobile button */}
          <button  className="lg:hidden px-5" onClick={()=>setIsMobileMenuOpen(!isMobileMenuOpen)}>
    
     {isMobileMenuOpen ?<RxCross1 size={28}/>:<IoMdMenu size={28}/>}
        </button>
    </div>
  
  {/* mobile menu */}
{isMobileMenuOpen &&(
    <div className="mobile bg-[#3a2318] px-6 py-6">
     <ul className="flex flex-col gap-6 text-[#debd94] text-base">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/aboutUs" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link></li>
            <li><Link href="/contactUs" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            <li>
              <button className="bg-[#debd94] text-black px-5 py-2 rounded-lg w-full mt-4">
                Get started
              </button>
            </li>
          </ul>
  </div>
)}
   </header>
  )
}

export default Navigations