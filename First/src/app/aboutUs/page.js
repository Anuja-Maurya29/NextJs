import React from 'react'
import Image from 'next/image'
import { playfair,poppins } from '@/app/fonts'

const AboutUsPage = () => {
  return (
  <>
<div className=" min-h-screen bg-[#debd94] w-full">

  <section className="max-w-7xl mx-auto px-6 py-16 bg-[#debd94]">

    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">About</h2>

          <h3 className="text-sm uppercase tracking-widest text-gray-900 mb-4">
            <span className={`${playfair.className}`}>Crumbs & Creations</span>
          </h3>

          <p className={`text-gray-600 leading-relaxed ${poppins.className}`}>
          

Hi, I’m Anuja — the creator behind this sweet little studio 
We make handcrafted designer chocolates, each one carefully decorated by hand with cute details and a soft pastel aesthetic. Every piece is unique and made with love — no mass production, just pure creativity.
Along with chocolates, we also bake freshly made eggless cupcakes and brownies, prepared completely from scratch without premix to ensure homemade taste and freshness.
Our goal is simple — to make every celebration sweeter, prettier, and more personal.
Handmade with love, always 
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="flex flex-col gap-6">
            <Image
              src="/aboutImg2.jpg"
              width={600}
              height={400}
              alt="Preparing ingredients"
              className="w-full h-56  object-cover rounded-xl"
            />
            <Image
              src="/aboutImg3.jpg"
              width={600}
              height={400}
              alt="Baking process"
              className="w-full h-56 md:h-70 object-cover rounded-xl"
            />
          </div>

          <div>
            <Image
              src="/aboutImg1.jpg"
              width={600}
              height={800}
              alt="Chocolate dusting"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

        </div>

      </div>

    </div>

  </section>

</div>

  </>
  )
}

export default AboutUsPage
