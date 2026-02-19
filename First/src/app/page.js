'use client'
import Image from "next/image";
import { playfair } from "./fonts";

export default function Home() {
 
  return (
<div className="bg-[#debd94] w-full min-h-screen  ">
<section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center ">
  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-amber-900 leading-tight ${playfair.className}`}>
    Handcrafted chocolates <br className="hidden sm:block" />
    made with love
  </h1>

  <p className="mt-6 text-base sm:text-lg md:text-xl text-amber-900 max-w-2xl mx-auto">
    Small-batch chocolates and cupcakes made fresh with quality ingredients
    and a whole lot of heart.
  </p>
</section>


<section className="images max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24  ">
  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-6 justify-center items-center  bg-amber-50 " >

  <Image
          
              src={`/img1.jpg?v=${Date.now()}`}
            width={400}
            height={200}
            alt="chocalate image"
             className="w-full  object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105 "
          
     
         />

  
     <Image
                 src={`/img2.jpg?v=${Date.now()}`}
                width={400}
                height={200}
                alt="chaoclate image"
                 className="w-full  object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
         
             />
             
      
          <Image
                    src={`/img3.png?v=${Date.now()}`}
                    width={400}
                    height={200}
                    alt="choclate image"
                     className="w-full  object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
             
                 />
      </div>

</section>

 
</div>
  );
}