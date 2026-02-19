
import { Roboto } from 'next/font/google'
import { Work_Sans } from 'next/font/google'
import { Oswald } from 'next/font/google'

 export const roboto =Roboto({
    subsets:["latin"],
    variable:"--font-roboto"
})

export const workSans =Work_Sans({
  subsets:["latin"],
  variable:"--font-work-sans"
})

export const oswald = Oswald({
  subsets:["latin"],
  variable:"--font-oswald"
})
 export const Fonts = () => {
  return (
   <>
   <h2>Fonts in next js </h2>
   </>
  )
}

