import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { RiCopyrightLine } from "react-icons/ri";
import Link from 'next/link';


const Footer = () => {
  return (
    <>
   
    <div className="bg-[#43291c] text-[#debd94] w-full">

  <div className="max-w-7xl mx-auto px-6 py-12">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


      <div>
        <h3 className="text-lg font-semibold">CONTACTS</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <IoLocationOutline />
            <span>Indore MP</span>
          </li>

          <li className="flex gap-3 items-center">
            <CiMail />
            <a href="mailto:crumbsandcreations@gmail.com">
              Connect us
            </a>
          </li>
        </ul>
      </div>


      <div>
        <h3 className="text-lg font-semibold">BUSINESS ACCOUNTS</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex gap-3 items-center">
            <FaInstagram />
            <span>Crumbs_and_Creations</span>
          </li>

          <li className="flex gap-3 items-center">
            <CiMail />
            <a href="mailto:crumbsandcreations@gmail.com">
              Connect us
            </a>
          </li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-lg font-semibold">CUSTOMER SERVICE</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/orderTracking">Order Tracking</Link></li>
          <li><Link href="/shippingInfo">Shipping Info</Link></li>
          <li><Link href="/returnPolicy">Return Policy</Link></li>
          <li><Link href="/giftCard">Gift Card</Link></li>
          <li><Link href="/faqs">FAQs</Link></li>
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h3 className="text-lg font-semibold">
          STAY UPDATED WITH SWEET NEWS
        </h3>

        <p className="mt-4 text-sm text-gray-200">
          Be the first to know about new flavors, limited-edition treats,
          and exclusive offers.
        </p>

        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-4 py-2 w-full md:flex-1 rounded bg-amber-50 text-gray-700 outline-none"
          />
          <button className="w-full md:w-auto px-4 py-2 bg-amber-100 text-gray-700 rounded text-sm font-medium">
            SUBMIT
          </button>
        </div>

        <p className="text-xs text-gray-300 mt-3">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>

    </div>
  </div>

  <div className="border-t border-[#5a3a2b]">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      
      <p className="flex items-center gap-1">
        <RiCopyrightLine />
        <span>2025 Crumbs & Creations. All rights reserved</span>
      </p>

      <ul className="flex flex-wrap justify-center gap-4">
        <li><Link href="/aboutUs">About Us</Link></li>
        <li><Link href="/privacyPolicy">Privacy Policy</Link></li>
        <li><Link href="/termsAndConditions">Terms & Conditions</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/contactUs">Contact Us</Link></li>
      </ul>

    </div>
  </div>

</div>

    </>
  )
}

export default Footer